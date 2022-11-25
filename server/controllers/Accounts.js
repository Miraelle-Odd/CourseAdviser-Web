const { Accounts, Personal_Infos, sequelize } = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const saltRounds = 10;

const fetchedDataValidate = (res) => {
    return res && res.account_id &&
        res.username &&
        res.password &&
        res.position &&
        res.email &&
        res.token &&
        res.status &&
        res.createdAt &&
        res.updatedAt
}

const findAccountById = async(req, res) => {
    try {
        const result = await Accounts.findOne({
            attributes: ["email"],
            where: {
                account_id: req.params.id
            },
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
        if (req.params.front)
            res.send(result)
        else
            return result
    } catch (e) {
        console.log(e)
    }
}

const findAccountByUsername = async(req, res) => {
    try {
        const result = await Accounts.findOne({
            where: {
                username: req.body.username
            },
        })
        if (req.body.front)
            res.send(result)
        else
            return result
    } catch (e) {
        console.log(e)
    }

}

const findAccountByEmail = async(req, res) => {
    try {
        const result = await Accounts.findOne({
            where: {
                email: req.body.email
            }
        })
        if (fetchedDataValidate(result)) {
            if (req.body.front)
                res.send(result)
            else
                return result
        } else
            res.send({ error: "Retrieve failed due to data loss" })
    } catch (e) {
        res.send(e)
    }
}

const setAccountToken = async(req, res) => {
    try {
        var plain = req.body.email + new Date().toUTCString()
        var hash = bcrypt.hashSync(plain, saltRounds)
        while (hash.includes("/"))
            hash = bcrypt.hashSync(plain, saltRounds)
        const result = await Accounts.update({
            token: hash
        }, {
            where: {
                email: req.body.email
            }
        })
        if (result == 1)
            res.send({
                success: "Set token successfully",
                token: hash
            })
        else
            res.send({ error: "User not found" })

    } catch (e) {
        res.send(e)
    }
}

const removeAccountToken = async(req, res) => {
    try {
        const result = await Accounts.update({
            token: "activated"
        }, {
            where: {
                token: req.body.token
            }
        })
        if (result == 1)
            res.send({ success: "Remove token successfully" })
        else
            res.send({ error: "Invalid recovery link" })
    } catch (e) {
        res.send(e)
    }
}

const updatePassword = async(req, res) => {
    try {
        var hash = bcrypt.hashSync(req.body.password, saltRounds)
        const result = await Accounts.update({
            password: hash
        }, {
            where: {
                token: req.body.token
            }
        })
        if (result == 1)
            res.send({ success: "Change password successfully" })
        else
            res.send({ error: "Invalid recovery link" })

    } catch (e) {
        res.send(e)
    }
}

const updatePasswordByUserId = async(req, res) => {
    try {
        Accounts.findOne({
            attributes: ["password"],
            where: {
                account_id: req.body.account_id
            },
        }).then((result) => {
            console.log(result.dataValues.password)
            comparePw = bcrypt.compare(req.body.password_old, result.dataValues.password, (error, response) => {
                if (response) {
                    Accounts.update({
                        password: bcrypt.hashSync(req.body.password_new, saltRounds)
                    }, {
                        where: {
                            account_id: req.body.account_id
                        }
                    }).then((result2) => {
                        if (result2[0] == 1)
                            res.send("1")
                        else
                            res.send("0")
                    })
                } else {
                    res.send("2")
                }
            })
        })


        // var hash = bcrypt.hashSync(req.body.password_new, saltRounds)
        // const result = await Accounts.update({
        //     password: hash
        // }, {
        //     where: {
        //         account_id: req.body.account_id
        //     }
        // })

        // res.send(result)

    } catch (e) {
        res.send(e)
    }
}

const logIn = async(req, res) => {
    try {
        let account = null
        let message = null
        if (req.body.username != "")
            account = await findAccountByUsername(req)
        else {
            message = { error: "Username required" }
            res.send(message)
            res.end()
        }

        let comparePw = false
        if (req.body.password != "") {
            if (account == null) {
                message = { error: "Incorrect username or password" }
                res.send(message)
                res.end()
            } else {
                if (account.status != "enabled") {
                    message = { error: "Your account is being disabled." }
                    res.send(message)
                } else {
                    comparePw = bcrypt.compare(req.body.password, account.password, (error, response) => {
                        if (response) {
                            data = {
                                account: {
                                    account_id: account.account_id,
                                    position: account.position
                                },
                                isLogin: true
                            }
                            const accessToken = sign(data, "secret")
                            message = {
                                message: "Login success",
                                token: accessToken
                            }
                            if (req.body.remember)
                                res.cookie("accessToken", accessToken, {
                                    maxAge: 1000 * 60 * 60 * 3
                                })
                            else
                                res.cookie("accessToken", accessToken)
                            res.send(message)
                            res.end()
                            return true
                        } else {
                            message = { error: "Incorrect username or password" }
                            res.send(message)
                            res.end()
                        }
                    })
                }

            }
        } else {
            message = { error: "Password required" }
            res.send(message)
            res.end()
        }

        return false
    } catch (e) {
        console.log(e)
        return false
    }
}

const createAccount = async(req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
        var plain = req.body.email + new Date().toUTCString()
        var token = bcrypt.hashSync(plain, saltRounds)
        while (token.includes("/"))
            token = bcrypt.hashSync(plain, saltRounds)
        const result = await Accounts.create({
            username: req.body.username,
            password: hashedPassword,
            position: req.body.position,
            email: req.body.email,
            token: token,
            status: "disabled",
            Personal_Info: {
                name: req.body.name
            }
        }, {
            include: [{
                model: Personal_Infos,
                as: "Personal_Info",
            }]
        }).then((result) => {
            const mailParams = {
                receiverEmail: result.dataValues.email,
                name: result.dataValues.Personal_Info.dataValues.name,
                username: result.dataValues.username,
                password: sign(req.body.password, "secret"),
                token: result.dataValues.token
            }
            res.send(mailParams)
        })

    } catch (e) {
        res.send(e)
    }
}

const activateAccount = async(req, res) => {
    try {
        const result = await Accounts.update({
            status: "enabled"
        }, {
            where: {
                token: req.body.token
            }
        })
        if (result == 1)
            res.send({ message: "Account activation success. You can now your account to log in XXX Center Course Adviser system" })
        else
            res.send({ message: "Invalid account activation link" })
    } catch (e) {
        res.send(e)
    }
}

const changeStatus = async(req, res) => {
    try {
        const result = await Accounts.update({
            status: req.body.status
        }, {
            where: {
                username: req.body.username
            }
        })
        if (result == 1)
            res.send({ success: "Status change success" })
        else
            res.send({ error: "User not found" })
    } catch (e) {
        res.send(e)
    }
}

const getCountByPosition = async(req, res) => {
    var result
    if (req.params.position == "all")
        result = await Accounts.count();
    else
        result = await Accounts.count({
            where: {
                position: req.params.position
            }
        });
    res.send(result.toString());
}

const getActiveCountByPosition = async(req, res) => {
    var result
    if (req.params.position == "all")
        result = await Accounts.count({
            where: {
                status: "enabled",
            }
        });
    else
        result = await Accounts.count({
            where: {
                status: "enabled",
                position: req.params.position
            }
        });
    res.send(result.toString());
}

const getInactiveCountByPosition = async(req, res) => {
    var result
    if (req.params.position == "all")
        result = await Accounts.count({
            where: {
                status: "disabled",
            }
        });
    else
        result = await Accounts.count({
            where: {
                status: "disabled",
                position: req.params.position
            }
        });
    res.send(result.toString());
}

const getListAccountByPosition = async(req, res) => {
    var page = 0;
    var result
    var order
    if (req.params.sortField == "name")
        order = [Personal_Infos, req.params.sortField, req.params.sortOrder]
    else
        order = [req.params.sortField, req.params.sortOrder]
    if (req.params.page)
        page = req.params.page
    if (req.params.position == "all")
        if (req.params.search == "all")
            result = await Accounts.findAll({
                attributes: ['email', 'status'],
                order: [
                    order
                ],
                limit: 8,
                offset: page * 8,
                include: {
                    model: Personal_Infos,
                    as: 'Personal_Info',
                }
            })
        else
            result = await Accounts.findAll({
                attributes: ['email', 'status'],
                include: {
                    model: Personal_Infos,
                    as: 'Personal_Info',
                    where: {
                        name: {
                            [Op.substring]: req.params.search
                        }
                    }
                },
                order: [
                    order
                ],
                limit: 8,
                offset: page * 8,
            })
    else
    if (req.params.search == "all")
        result = await Accounts.findAll({
            attributes: ['email', 'status'],
            where: {
                position: req.params.position
            },
            order: [
                order
            ],
            limit: 8,
            offset: page * 8,
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
    else
        result = await Accounts.findAll({
            attributes: ['email', 'status'],
            where: {
                position: req.params.position,
            },
            include: {
                model: Personal_Infos,
                as: 'Personal_Info',
                where: {
                    name: {
                        [Op.substring]: req.params.search
                    }
                }
            },
            order: [
                order
            ],
            limit: 8,
            offset: page * 8,
        })
    res.send(result)
}

const getDetailById = async(req, res) => {
    try {
        const result = await Accounts.findOne({
            where: {
                account_id: req.params.id
            },
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const updateAccountById = async(req, res) => {
    let accountValues = {
        position: req.body.position,
    };
    let personalValues = {
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        location: req.body.location,
        phone: req.body.phone,
        avatar: req.body.avatar
    };
    Accounts.update(accountValues, { where: { account_id: req.body.account_id } })
        .then(
            Personal_Infos.update(personalValues, { where: { account_id: req.body.account_id } })
            .then((result) =>
                res.send(result)
            )
        );
}
const updateStatus = async(req, res) => {
    let itemValues;
    if (req.params.status == "false") {
        itemValues = {
            status: "enabled"
        };
    } else if (req.params.status == "true") {
        itemValues = {
            status: "disabled"
        };
    }

    Accounts.update(itemValues, { where: { account_id: req.params.id } }).then((result) => {
        res.send(result);
    });
}

const getCountBySearch = async(req, res) => {
    var result
    let search = req.params.search;
    let category = req.params.category;
    if (search == "all") {
        if (category == "all")
            result = await Accounts.count();
        else
            result = await Accounts.count({
                where: {
                    position: category
                }
            });
    } else {
        if (category == "all")
            result = await Accounts.count({
                include: {
                    model: Personal_Infos,
                    as: 'Personal_Info',
                    where: {
                        name: {
                            [Op.substring]: req.params.search
                        }
                    }
                },
            });
        else
            result = await Accounts.count({
                where: {
                    position: category
                },
                include: {
                    model: Personal_Infos,
                    as: 'Personal_Info',
                    where: {
                        name: {
                            [Op.substring]: req.params.search
                        }
                    }
                },
            });
    }

    res.send(result.toString());
}

const getCountsForChart = async(req, res) => {
    var filter = {}
    if (!req.params.groupBy)
        res.send({ error: "No group is selected" })
    if (req.body)
        filter = {
            [req.body.filterField]: {
                [Op.or]: req.body.filters
            }
        }
    try {
        const result = await Accounts.findAll({
            attributes: [req.params.groupBy, [sequelize.fn('COUNT', sequelize.col('account_id')), 'total']],
            group: [req.params.groupBy],
            where: filter
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const getCountsByTimeForChart = async(req, res) => {
    try {
        var filter = {
            createdAt: sequelize.where(sequelize.fn("YEAR", sequelize.col("createdAt")), req.params.year)
        }
        if (req.params.filterField && req.params.filterValue)
            filter = {
                createdAt: sequelize.where(sequelize.fn("YEAR", sequelize.col("createdAt")), req.params.year),
                [req.params.filterField]: req.params.filterValue
            }
        const result = await Accounts.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                [sequelize.fn('COUNT', sequelize.col('account_id')), 'total']
            ],
            group: ['month'],
            where: filter
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    findAccountByUsername,
    findAccountByEmail,
    setAccountToken,
    removeAccountToken,
    updatePassword,
    createAccount,
    activateAccount,
    changeStatus,
    getCountByPosition,
    getListAccountByPosition,
    getActiveCountByPosition,
    getInactiveCountByPosition,
    logIn,
    getDetailById,
    updateAccountById,
    updateStatus,
    updatePasswordByUserId,
    findAccountById,
    getCountBySearch,
    getCountsForChart,
    getCountsByTimeForChart,
}
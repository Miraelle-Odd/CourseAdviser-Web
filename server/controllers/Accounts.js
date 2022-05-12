const { Accounts, Personal_Infos } = require("../models");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const saltRounds = 10;

const fetchedDataValidate = async (res) => {
    return res.account_id &&
        res.username &&
        res.password &&
        res.position &&
        res.email &&
        res.token &&
        res.status &&
        res.createdAt &&
        res.updatedAt
}

const findAccountByUsername = async (req, res) => {
    try {
        const result = await Accounts.findOne({
            where: {
                username: req.body.username
            },
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
        if (fetchedDataValidate(result)) {
            // res.send(result)
            return result
        } else
            res.send("Retrieve failed due to data loss")
    } catch (e) {
        console.log(e)
    }

}

const findAccountByEmail = async (req, res) => {
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

const setAccountToken = async (req, res) => {
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

const removeAccountToken = async (req, res) => {
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

const updatePassword = async (req, res) => {
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

const logIn = async (req, res) => {
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
                                account: account,
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

const createAccount = async (req, res) => {
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

const activateAccount = async (req, res) => {
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

const changeStatus = async (req, res) => {
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

const getCountByPosition = async (req, res) => {
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

const getActiveCountByPosition = async (req, res) => {
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

const getInactiveCountByPosition = async (req, res) => {
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

const getListAccountByPosition = async (req, res) => {
    var page = 0;
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.position == "all")
        result = await Accounts.findAll({
            attributes: ['email', 'status'],
            order: [
                ['account_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
    else
        result = await Accounts.findAll({
            attributes: ['email', 'status'],
            where: {
                position: req.params.position
            },
            order: [
                ['account_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
            include: {
                model: Personal_Infos,
                as: 'Personal_Info'
            }
        })
    res.send(result)
}

const getDetailById = async (req, res) => {
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

const updateAccountById = async (req, res) => {
    let accountValues = {
        position: req.body.position,
    };
    let personalValues = {
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        location: req.body.location,
        phone: req.body.phone
    };
    Accounts.update(accountValues, { where: { account_id: req.body.account_id } })
        .then(
            Personal_Infos.update(personalValues, { where: { account_id: req.body.account_id } })
                .then((result) =>
                    res.send(result)
                )
        );
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
    updateAccountById
}
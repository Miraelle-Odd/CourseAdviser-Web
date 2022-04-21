const { Accounts, Personal_Infos } = require("../models");
const bcrypt = require("bcrypt");

const { sign, verify } = require("jsonwebtoken");

const saltRounds = 10;

const fetchedDataValidate = async(res) => {
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

const findAccountByUsername = async(req, res) => {
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
            res.send(result)
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
            res.send({ success: "Account activation success" })
        else
            res.send({ error: "Invalid account activation link" })
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



module.exports = {
    findAccountByUsername,
    findAccountByEmail,
    setAccountToken,
    removeAccountToken,
    updatePassword,
    createAccount,
    activateAccount,
    changeStatus,
    logIn
}
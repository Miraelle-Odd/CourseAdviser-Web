const { Accounts } = require("../models");
const bcrypt = require("bcrypt");
const e = require("express");
const { response } = require("express");

const { sign, verify } = require("jsonwebtoken")

const fetchedDataValidate = async (res) => {
    return res.body.account_id &&
        res.body.username &&
        res.body.password &&
        res.body.position &&
        res.body.email &&
        res.body.token &&
        res.body.status &&
        res.body.createdAt &&
        res.body.updatedAt
}

const findAccount = async (req, res) => {
    try {
        const result = await Accounts.findOne({
            where: {
                username: req.body.username
            },
        })
        if (fetchedDataValidate(result))
            return result
        else
            res.send("Retrieve failed due to data loss")
    } catch (e) {
        console.log(e)
    }

}

const validateToken = (req, res, next) => {
    const accessToken = sessionStorage.getItem("accessToken");

    if (!accessToken)
        return res.send({ error: "No user has logged in" })

    try {
        const validToken = verify(accessToken, "secret")
        if (validToken)
            return next()
    } catch (err) {
        return res.send({ error: err })
    }
}

const verifyToken = async (req, res) => {
    res.send(verify(req.body.token, "secret"))
}

const logIn = async (req, res) => {
    try {
        let account = null
        let message = null
        if (req.body.username != "")
            account = await findAccount(req)
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

module.exports = {
    findAccount,
    logIn,
    validateToken,
    verifyToken
}
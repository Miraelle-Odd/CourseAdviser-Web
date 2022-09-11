const { Requests, sequelize } = require("../models");
const { Op } = require("sequelize");

const sendRequest = async (req, res) => {
    let itemValues = {
        content: req.body.content,
    };
    if (itemValues.content !== undefined)
        Requests.create(itemValues).then((result) => {
            res.send(result);
        })
    else {
        console.log("invalid")
        res.send("invalid")
    }
}
const getCountAll = async(req, res) => {
    var result = await Requests.count();
    res.send(result.toString());
}
const getItemPaging = async(req, res) => {
    var page = 0;
    if (req.params.page)
        page = req.params.page;
    var result = await Requests.findAll({
        order: [
            ['request_id', 'DESC']
        ],
        limit: 8,
        offset: page * 8,
    })
    res.send(result)
}
const getCountByMainSubject = async(req, res) => {
    var result
    if (req.params.category == "all")
        result = await Requests.count();
    else
        result = await Requests.count();
    res.send(result.toString());
}
const getListQAByMainSubject = async(req, res) => {
    var page = 0;
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.category == "all") {
        if (req.params.search == "all")
            result = await Requests.findAll({
                order: [
                    [req.params.sortField, req.params.sortOrder]
                ],
                limit: 8,
                offset: page * 8,
            })
        else
            result = await Requests.findAll({
                where: {
                    content: {
                        [Op.substring]: req.params.search
                    }
                },
                order: [
                    [req.params.sortField, req.params.sortOrder]
                ],
                limit: 8,
                offset: page * 8,
            })
    } else
    if (req.params.search == "all")
        result = await Requests.findAll({
            order: [
                [req.params.sortField, req.params.sortOrder]
            ],
            limit: 8,
            offset: page * 8,
        })
    else
        result = await Requests.findAll({
            where: {
                content: {
                    [Op.substring]: req.params.search
                }
            },
            order: [
                [req.params.sortField, req.params.sortOrder]
            ],
            limit: 8,
            offset: page * 8,
        })
    res.send(result)
}

module.exports = {
    sendRequest,
    getItemPaging,
    getCountAll,
    getCountByMainSubject,
    getListQAByMainSubject
}
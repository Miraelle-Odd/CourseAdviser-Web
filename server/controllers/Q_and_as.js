const { Q_and_as } = require("../models");
const { Op } = require("sequelize");
const e = require("express");
const getCountAll = async(req, res) => {
    var result = await Q_and_as.count();
    res.send(result.toString());
}

const getItemPaging = async(req, res) => {
    var page = 0;
    if (req.params.page)
        page = req.params.page;
    var result = await Q_and_as.findAll({
        order: [
            ['qa_id', 'DESC']
        ],
        limit: 8,
        offset: page * 8,
    })
    res.send(result)
}

const getCountByMainSubject = async(req, res) => {
    var result
    if (req.params.category == "all")
        result = await Q_and_as.count();
    else
        result = await Q_and_as.count({
            where: {
                main_subject: req.params.category
            }
        });
    res.send(result.toString());
}

const getActiveCountByMainSubject = async(req, res) => {
    var result
    if (req.params.category == "all")
        result = await Q_and_as.count({
            where: {
                status: "enabled",
            }
        });
    else
        result = await Q_and_as.count({
            where: {
                status: "enabled",
                main_subject: req.params.category
            }
        });
    res.send(result.toString());
}
const getInactiveCountByMainSubject = async(req, res) => {
    var result
    if (req.params.category == "all")
        result = await Q_and_as.count({
            where: {
                status: "disabled",
            }
        });
    else
        result = await Q_and_as.count({
            where: {
                status: "disabled",
                main_subject: req.params.category
            }
        });
    res.send(result.toString());
}

const getListQAByMainSubject = async(req, res) => {
    var page = 0;
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.category == "all") {
        if (req.params.search == "all")
            result = await Q_and_as.findAll({
                order: [
                    [req.params.sortField, req.params.sortOrder]
                ],
                limit: 8,
                offset: page * 8,
            })
        else
            result = await Q_and_as.findAll({
                where: {
                    question: {
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
        result = await Q_and_as.findAll({
            where: {
                main_subject: req.params.category
            },
            order: [
                [req.params.sortField, req.params.sortOrder]
            ],
            limit: 8,
            offset: page * 8,
        })
    else
        result = await Q_and_as.findAll({
            where: {
                main_subject: req.params.category,
                question: {
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

const getQaById = async(req, res) => {
    try {
        const result = await Q_and_as.findOne({
            where: {
                qa_id: req.params.id
            }
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}
const createOrUpdateQa = async(req, res) => {
    if (req.body.qa_id !== undefined) {
        // Update case
        Q_and_as.update(req.body, { where: { qa_id: req.body.qa_id } }).then((result) => {
            res.send(result);
        });
    } else {
        // Create case
        if (req.body.question !== undefined && req.body.answer !== undefined) {
            Q_and_as.create(req.body).then((result) => {
                res.send(result);
            })
        } else {
            console.log("invalid")
            res.send("invalid")
        }
    }

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

    Q_and_as.update(itemValues, { where: { qa_id: req.params.id } }).then((result) => {
        res.send(result);
    });
}

const getCountBySearch = async(req, res) => {
    var result
    let search = req.params.search;
    let category = req.params.category;
    if (search == "all") {
        if (category == "all")
            result = await Q_and_as.count();
        else
            result = await Q_and_as.count({
                where: {
                    main_subject: category
                }
            });
    } else {
        if (category == "all")
            result = await Q_and_as.count({
                where: {
                    question: {
                        [Op.substring]: search
                    }
                }
            });
        else
            result = await Q_and_as.count({
                where: {
                    main_subject: category,
                    question: {
                        [Op.substring]: search
                    }
                }
            });
    }

    res.send(result.toString());
}

module.exports = {
    getCountAll,
    getItemPaging,
    getCountByMainSubject,
    getListQAByMainSubject,
    getActiveCountByMainSubject,
    getInactiveCountByMainSubject,
    getQaById,
    createOrUpdateQa,
    updateStatus,
    getCountBySearch
}
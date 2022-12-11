const { Requests, sequelize } = require("../models");
const { Op } = require("sequelize");

const sendRequest = async(req, res) => {
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
const getActiveCountAll = async(req, res) => {
    var result = await Requests.count({
        where: {
            status: "done",
        }
    });
    res.send(result.toString());
}
const getInactiveCountAll = async(req, res) => {
    var result = await Requests.count({
        where: {
            status: "considering",
        }
    });
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
const getRequestById = async(req, res) => {
    try {
        const result = await Requests.findOne({
            where: {
                request_id: req.params.id
            }
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}
const updateRequest = async(req, res) => {
    Requests.update(req.body, { where: { request_id: req.body.request_id } }).then((result) => {
        res.send(result);
    });
}
const updateStatus = async(req, res) => {
    let itemValues;
    if (req.params.status == "false") {
        itemValues = {
            status: "done"
        };
    } else if (req.params.status == "true") {
        itemValues = {
            status: "considering"
        };
    }

    Requests.update(itemValues, { where: { request_id: req.params.id } }).then((result) => {
        res.send(result);
    });
}
const getCountBySearch = async(req, res) => {
    var result
    let search = req.params.search;
    if (search == "all") {
        result = await Requests.count();
    } else {
        result = await Requests.count({
            where: {
                content: {
                    [Op.substring]: search
                }
            }
        });
    }

    res.send(result.toString());
}
const getCountsForChart = async(req, res) => {
    var filter = {}
    if (!req.params.groupBy)
        res.send({ error: "No group is selected" })
    if (req.body.filterField && req.body.filters)
        filter = {
            [req.body.filterField]: {
                [Op.or]: req.body.filters
            }
        }
    try {
        const result = await Requests.findAll({
            attributes: [req.params.groupBy, [sequelize.fn('COUNT', sequelize.col('request_id')), 'total']],
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
        const result = await Requests.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                [sequelize.fn('COUNT', sequelize.col('request_id')), 'total']
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
    sendRequest,
    getItemPaging,
    getCountAll,
    getCountByMainSubject,
    getListQAByMainSubject,
    getActiveCountAll,
    getInactiveCountAll,
    getRequestById,
    updateStatus,
    updateRequest,
    getCountBySearch,
    getCountsForChart,
    getCountsByTimeForChart,
}
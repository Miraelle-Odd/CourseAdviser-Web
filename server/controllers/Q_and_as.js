const { Q_and_as } = require("../models");

const getCountAll = async (req, res) => {
    var result = await Q_and_as.count();
    res.send(result.toString());
}

const getItemPaging = async (req, res) => {
    var page = 0;
    if (req.params.page)
        page = req.params.page;
    var result = await Q_and_as.findAll({
        order: [
            ['qa_id', 'DESC']
        ],
        limit: 2,
        offset: page * 2,
    })
    res.send(result)
}

const getCountByMainSubject = async (req, res) => {
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

const getActiveCountByMainSubject = async (req, res) => {
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
const getInactiveCountByMainSubject = async (req, res) => {
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

const getListQAByMainSubject = async (req, res) => {
    var page = 0;
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.category == "all")
        result = await Q_and_as.findAll({
            order: [
                ['qa_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
        })
    else
        result = await Q_and_as.findAll({
            where: {
                main_subject: req.params.category
            },
            order: [
                ['qa_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
        })
    res.send(result)
}

const getQaById = async (req, res) => {
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
const createOrUpdateQa = async (req, res) => {
    if (req.body.qa_id !== undefined) {
        // Update case
        Q_and_as.update(req.body, { where: { qa_id: req.body.qa_id } }).then((result) => {
            res.send(result);
        });
    }
    else {
        // Create case
        if (req.body.question !== undefined && req.body.answer !== undefined) {
            Q_and_as.create(req.body).then((result) => {
                res.send(result);
            })
        }
        else {
            console.log("invalid")
            res.send("invalid")
        }
    }

}
module.exports = {
    getCountAll,
    getItemPaging,
    getCountByMainSubject,
    getListQAByMainSubject,
    getActiveCountByMainSubject,
    getInactiveCountByMainSubject,
    getQaById,
    createOrUpdateQa
}
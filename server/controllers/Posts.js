const { Posts, sequelize } = require("../models");
const { Op } = require("sequelize");

const getTop2WithType = async(req, res) => {
    const result = await sequelize.query(
        "SELECT DISTINCT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_type` = :type ORDER BY `Posts`.`post_id` DESC LIMIT 2", {
            replacements: { type: req.params.type },
            type: sequelize.QueryTypes.SELECT
        }
    )
    res.send(result)
}
const getCountAll = async(req, res) => {
    var result
    if (req.params.type == "all")
        result = await Posts.count();
    else
        result = await Posts.count({
            where: {
                post_type: req.params.type
            }
        });
    res.send(result.toString());
}
const getActiveCountAll = async(req, res) => {
    var result
    if (req.params.type == "all")
        result = await Posts.count({
            where: {
                post_status: "enabled",
            }
        });
    else
        result = await Posts.count({
            where: {
                post_status: "enabled",
                post_type: req.params.type
            }
        });
    res.send(result.toString());
}
const getInactiveCountAll = async(req, res) => {
    var result
    if (req.params.type == "all")
        result = await Posts.count({
            where: {
                post_status: "disabled",
            }
        });
    else
        result = await Posts.count({
            where: {
                post_status: "disabled",
                post_type: req.params.type
            }
        });
    res.send(result.toString());
}
const getItemPaging = async(req, res) => {
    const { page } = req.query
    const result = await sequelize.query(
        "SELECT DISTINCT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_type` = :type ORDER BY `Posts`.`post_id` DESC LIMIT :skip, 6", {
            replacements: {
                type: req.params.type,
                skip: page * 6
            },
            type: sequelize.QueryTypes.SELECT
        }
    )
    res.send(result)
}
const getItemDetail = async(req, res) => {
    const result = await sequelize.query(
        "SELECT DISTINCT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_id` = :id", {
            replacements: {
                id: req.params.id
            },
            type: sequelize.QueryTypes.SELECT
        }
    )
    res.send(result)
}
const getTop5All = async(req, res) => {
    const result = await sequelize.query(
        "SELECT DISTINCT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` ORDER BY `Posts`.`post_id` DESC LIMIT 5", {
            type: sequelize.QueryTypes.SELECT
        }
    )
    res.send(result)
}
const getListPostByCategory = async(req, res) => {
    var page = 0
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.category == "all") {
        if (req.params.search == "all")
            result = await Posts.findAll({
                order: [
                    [req.params.sortField, req.params.sortOrder]
                ],
                limit: 8,
                offset: page * 8,
            })
        else
            result = await Posts.findAll({
                where: {
                    post_title: {
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
        result = await Posts.findAll({
            where: {
                post_type: req.params.category
            },
            order: [
                [req.params.sortField, req.params.sortOrder]
            ],
            limit: 8,
            offset: page * 8,
        })
    else
        result = await Posts.findAll({
            where: {
                post_type: req.params.category,
                post_title: {
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
const updatePost = async(req, res) => {
    if (req.body.post_id != null) {
        let itemValues = {
            post_title: req.body.post_title,
            post_subtitle: req.body.post_subtitle,
            post_content: req.body.post_content,
            post_type: req.body.post_type,
            post_status: req.body.post_status,
            post_img: req.body.post_img
        };
        Posts.update(itemValues, { where: { post_id: req.body.post_id } }).then((result) => {
            res.send(result);
        });
    } else {
        let itemValues = {
            author_id: req.body.author_id,
            post_title: req.body.post_title,
            post_subtitle: req.body.post_subtitle,
            post_content: req.body.post_content,
            post_type: req.body.post_type,
            post_status: req.body.post_status,
            post_img: req.body.post_img
        };
        if (itemValues.post_title !== undefined && itemValues.post_subtitle !== undefined && itemValues.post_content !== undefined)
            Posts.create(itemValues).then((result) => {
                res.send(result);
            })
        else {
            console.log("invalid")
            res.send("invalid")
        }

    }
}
const updateStatus = async(req, res) => {
    let itemValues;
    if (req.params.status == "false") {
        itemValues = {
            post_status: "enabled"
        };
    } else if (req.params.status == "true") {
        itemValues = {
            post_status: "disabled"
        };
    }

    Posts.update(itemValues, { where: { post_id: req.params.id } }).then((result) => {
        res.send(result);
    });
}

const getCountBySearch = async(req, res) => {
    var result
    let search = req.params.search;
    let category = req.params.category;
    if (search == "all") {
        if (category == "all")
            result = await Posts.count();
        else
            result = await Posts.count({
                where: {
                    post_type: category
                }
            });
    } else {
        if (category == "all")
            result = await Posts.count({
                where: {
                    post_title: {
                        [Op.substring]: search
                    }
                }
            });
        else
            result = await Posts.count({
                where: {
                    post_type: category,
                    post_title: {
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
        const result = await Posts.findAll({
            attributes: [req.params.groupBy, [sequelize.fn('COUNT', sequelize.col('post_id')), 'total']],
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
        const result = await Posts.findAll({
            attributes: [
                [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                [sequelize.fn('COUNT', sequelize.col('post_id')), 'total']
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
    getTop2WithType,
    getCountAll,
    getItemPaging,
    getItemDetail,
    getActiveCountAll,
    getInactiveCountAll,
    getTop5All,
    getListPostByCategory,
    updatePost,
    updateStatus,
    getCountBySearch,
    getCountsForChart,
    getCountsByTimeForChart
}
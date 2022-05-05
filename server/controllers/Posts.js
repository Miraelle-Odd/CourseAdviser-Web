const { Posts, sequelize } = require("../models");


const getTop2WithType = async (req, res) => {
    const result = await sequelize.query(
        "SELECT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_type` = :type ORDER BY `Posts`.`post_id` DESC LIMIT 2", {
        replacements: { type: req.params.type },
        type: sequelize.QueryTypes.SELECT
    }
    )
    res.send(result)
}
const getCountAll = async (req, res) => {
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
const getActiveCountAll = async (req, res) => {
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
const getInactiveCountAll = async (req, res) => {
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
const getItemPaging = async (req, res) => {
    const { page } = req.query
    const result = await sequelize.query(
        "SELECT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_type` = :type ORDER BY `Posts`.`post_id` DESC LIMIT :skip, 2", {
        replacements: {
            type: req.params.type,
            skip: page * 2
        },
        type: sequelize.QueryTypes.SELECT
    }
    )
    res.send(result)
}
const getItemDetail = async (req, res) => {
    const result = await sequelize.query(
        "SELECT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_id` = :id", {
        replacements: {
            id: req.params.id
        },
        type: sequelize.QueryTypes.SELECT
    }
    )
    res.send(result)
}
const getTop5All = async (req, res) => {
    const result = await sequelize.query(
        "SELECT post_id, author_id, post_title, post_subtitle, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` ORDER BY `Posts`.`post_id` DESC LIMIT 5", {
        type: sequelize.QueryTypes.SELECT
    }
    )
    res.send(result)
}
const getListPostByCategory = async (req, res) => {
    var page = 0
    var result
    if (req.params.page)
        page = req.params.page
    if (req.params.category == "all")
        result = await Posts.findAll({
            order: [
                ['post_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
        })
    else
        result = await Posts.findAll({
            where: {
                post_type: req.params.category
            },
            order: [
                ['post_id', 'DESC']
            ],
            limit: 2,
            offset: page * 2,
        })
    res.send(result)
}
const updatePost = async (req, res) => {
    if (req.body.post_id != null) {
        let itemValues = {
            post_title: req.body.post_title,
            post_subtitle: req.body.post_subtitle,
            post_content: req.body.post_content,
            post_type: req.body.post_type,
            post_status: req.body.post_status,
        };
        Posts.update(itemValues, { where: { post_id: req.body.post_id } }).then((result) => {
            res.send(result);
        });
    }

    else {
        let itemValues = {
            author_id: req.body.author_id,
            post_title: req.body.post_title,
            post_subtitle: req.body.post_subtitle,
            post_content: req.body.post_content,
            post_type: req.body.post_type,
            post_status: req.body.post_status,
        };
        if (itemValues.post_title !== undefined && itemValues.post_subtitle !== undefined && itemValues.post_content !== undefined)
            Posts.create(itemValues).then((result) => {
                res.send(result);
            })
        else{
            console.log("invalid")
            res.send("invalid")
        }
            
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
    updatePost
}
const { Posts, sequelize } = require("../models");


const getTop2WithType = async (req, res) => {
    const result = await sequelize.query(
        "SELECT post_id, author_id, post_title, post_content, post_img, post_type, post_status, Posts.createdAt, Posts.updatedAt, name, birthday, location, avatar FROM `Posts` AS `Posts` JOIN `Personal_Infos` AS `Personal_Info` ON `Posts`.`author_id` = `Personal_Info`.`account_id` WHERE `Posts`.`post_type` = :type ORDER BY `Posts`.`post_id` DESC LIMIT 2",
        {
            replacements: { type: req.params.type },
            type: sequelize.QueryTypes.SELECT
        }
    )
    res.send(result)
}


module.exports = {
    getTop2WithType
}
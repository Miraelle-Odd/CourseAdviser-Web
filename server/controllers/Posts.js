const { Posts } = require("../models");


const getTop2WithType = async (req, res) => {
    const result = await Posts.findAll(
        {
            where:
            {
                post_type: req.params.type
            },
            order: [ [ 'post_id', 'DESC' ]],
            limit: 2
        }
    )
    res.send(result)
}


module.exports = {
    getTop2WithType
}
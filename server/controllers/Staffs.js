const { Staffs } = require("../models");


const getTop4WithType = async (req, res) => {
    const result = await Staffs.findAll(
        {
            where:
            {
                staff_type: req.params.type
            },
            limit: 4
        }
    )
    res.send(result)
}


module.exports = {
    getTop4WithType
}
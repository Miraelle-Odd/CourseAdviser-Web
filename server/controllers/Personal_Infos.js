const { Personal_Infos, sequelize } = require("../models");

const getById = async (req, res) => {
    const result = await Personal_Infos.findAll({
        where: {
            account_id: req.params.id
        }
    })
    res.send(result)
}

module.exports = {
    getById,
}
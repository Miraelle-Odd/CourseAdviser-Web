const { Exam_Sessions, Exam_AllTests, Exam_Details, sequelize } = require("../models");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const createExamSession = async (req, res) => {
    try {
        const currentAvailableTest = await Exam_AllTests.findOne({
            attributes: ["test_id"],
            order: sequelize.random()
        });
        const sessionCreate = await Exam_Sessions.create({
            test_id: currentAvailableTest?.dataValues?.test_id
        })
        const testId = sessionCreate.dataValues.session_id
        if (!testId) {
            res.send("Fail to create exam token")
            return
        }
        var plain = testId + new Date().toUTCString()
        var hash = bcrypt.hashSync(plain, saltRounds)
        while (hash.includes("/"))
            hash = bcrypt.hashSync(plain, saltRounds)
        const tokenCreate = await Exam_Sessions.update({
            token: hash
        }, {
            where: {
                session_id: testId
            }
        })
        sessionCreate.token = hash
        res.send(sessionCreate)
    } catch (e) {
        console.log(e)
    }
}

const getExamSession = async (req, res) => {
    try {
        const session = await Exam_Sessions.findOne({
            where: {
                token: req.params.token
            }
        });
        res.send(session)
    } catch (e) {
        console.log(e)
    }
}

const calculateScore = async (req, res) => {
    try {
        totalCorrect = 0
        const answer = await Exam_Sessions.findAll({
            attributes: ['session_id', 'token'],
            where: {
                token: req.params.token
            },
            include: {
                attributes: ['test_id'],
                model: Exam_AllTests,
                as: 'Exam_AllTest',
                include: {
                    attributes: ['item_id', 'answer', 'test_id'],
                    model: Exam_Details,
                    as: 'Exam_Detail'
                }
            }
        }).then(result=>{
            const intersected = result?.reduce((acc, curr) => {
                return [...acc, ...req.body.filter(item => item.item_id === curr.dataValues.Exam_AllTest.dataValues.Exam_Detail.dataValues.item_id && item.userAnswer === curr.dataValues.Exam_AllTest.dataValues.Exam_Detail.dataValues.answer)];
            }, []);
            res.send(intersected.length.toString())
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    createExamSession,
    getExamSession,
    calculateScore
}
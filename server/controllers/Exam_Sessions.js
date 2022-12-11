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
            test_id: currentAvailableTest?.dataValues?.test_id,
            email: req.body.email
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
        var listeningCorrect = 0
        var readingCorrect = 0
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
                    attributes: ['item_id', 'answer', 'test_id', 'type'],
                    model: Exam_Details,
                    as: 'Exam_Detail'
                }
            }
        }).then(async result => {
            const intersected = result?.reduce((acc, curr) => {
                return [...acc, ...req.body.filter(item =>
                    item.item_id == curr.dataValues.Exam_AllTest.dataValues.Exam_Detail.dataValues.item_id
                    &&
                    item.userAnswer == curr.dataValues.Exam_AllTest.dataValues.Exam_Detail.dataValues.answer)];
            }, []);
            listeningCorrect = intersected.filter(item => item.type.includes("listening")).length
            readingCorrect = intersected.filter(item => item.type.includes("reading")).length
            const update = await Exam_Sessions.update(
                {
                    listening_correct: listeningCorrect,
                    listening_score: calculateListening(listeningCorrect),
                    reading_correct: readingCorrect,
                    reading_score: calculateReading(readingCorrect),
                    total_score: calculateListening(listeningCorrect) + calculateReading(readingCorrect),
                    status: "done"
                },
                {
                    where: {
                        token: req.params.token
                    }
                })
                
            if (update == 1)
                res.send("Evaluation success")
            else
                res.send('Evaluation failed')
        })
    } catch (e) {
        console.log(e)
    }
}

const calculateListening = (correct) => {
    switch (true) {
        case (correct <= 6):
            return 5
        case (correct >= 7 && correct < 31):
            return (correct - 5) * 5
        case (correct >= 31 && correct < 39):
            return (correct - 4) * 5
        case (correct >= 39 && correct < 44):
            return (correct - 3) * 5
        case (correct == 44):
            return 210
        case (correct >= 45 && correct < 54):
            return (correct - 1) * 5
        case (correct >= 54 && correct < 58):
            return correct * 5
        case (correct >= 58 && correct < 70):
            return (correct + 1) * 5
        case (correct >= 70 && correct < 75):
            return (correct + 2) * 5
        case (correct >= 75 && correct < 80):
            return (correct + 3) * 5
        case (correct >= 80 && correct < 85):
            return (correct + 4) * 5
        case (correct >= 85 && correct < 88):
            return (correct + 5) * 5
        case (correct >= 88 && correct < 93):
            return (correct + 6) * 5
        case (correct >= 93):
            return 495
        default:
            return 0
    }
}

const calculateReading = (correct) => {
    switch (true) {
        case (correct <= 9):
            return 5
        case (correct >= 10 && correct < 25):
            return (correct - 8) * 5
        case (correct >= 25 && correct < 28):
            return (correct - 7) * 5
        case (correct >= 28 && correct < 39):
            return (correct - 6) * 5
        case (correct >= 39 && correct < 43):
            return (correct - 5) * 5
        case (correct >= 43 && correct < 47):
            return (correct - 4) * 5
        case (correct >= 47 && correct < 52):
            return (correct - 3) * 5
        case (correct >= 52 && correct < 55):
            return (correct - 2) * 5
        case (correct >= 55 && correct < 64):
            return (correct - 1) * 5
        case (correct >= 64 && correct < 82):
            return correct * 5
        case (correct >= 82 && correct < 89):
            return (correct - 1) * 5
        case (correct >= 89 && correct < 92):
            return correct * 5
        case (correct >= 92 && correct < 94):
            return (correct + 1) * 5
        case (correct >= 94 && correct < 97):
            return (correct + 2) * 5
        case (correct >= 97):
            return 495
        default:
            return 0
    }
}

module.exports = {
    createExamSession,
    getExamSession,
    calculateScore
}
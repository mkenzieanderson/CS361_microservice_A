require('dotenv').config();
const quizQuestions = require('./quiz_modules/QuizQuestionsModule');

const express = require('express');
const cors = require('cors');

const app = express();

const GenerateRecommendation = require('./quiz_modules/GenerateRecommendation');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to microservice A'});
})

app.get('/quiz', (req, res) => {
    res.json(quizQuestions);
});

app.post('/quiz', (req, res) => {
    try {
        const {quizResults} = req.body;
        const light_recommendation = GenerateRecommendation(quizResults);
        if (light_recommendation === "Error") {
            return res.status(400).json({ error: "Invalid request: quizResults must be an array of exactly four Uppercase, single-letter answers that match one of the options available for each question" });
        }
        res.json({ recommendation: light_recommendation });
    } catch (error) {
        console.error("Error processing quiz results:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})
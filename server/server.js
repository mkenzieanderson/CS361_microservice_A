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
    const {quizResults} = req.body;
    const light_recommendation = GenerateRecommendation(quizResults);
    res.json({recommendation: light_recommendation})
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})
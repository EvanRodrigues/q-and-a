const express = require('express');
const router = express.Router();

// Question Model
const Question = require('../../models/Question');


// @route   GET api/questions
// @desc    Get all questions
// @access  Public
router.get('/', (req, res) => {
    Question.find()
        .sort({ date: -1 }) //desc
        .then(items => res.json(items));
});

// @route   POST api/questions
// @desc    Creates a new question
// @access  Public
router.post('/', (req, res) => {
    const newQuestion = new Question({
        question: req.body.question
    });

    newQuestion.save()
        .then(question => res.json(question));
});

// @route   DELETE api/questions/:id
// @desc    Deletes a question based on :id
// @access  Public
router.delete('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(question => question.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


// @route   GET api/questions/:id/answers
// @desc    Gets the answers from question with :id
// @access  Public
router.get('/:id/answers', (req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json({ question: question.question, answers: question.answers }))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   POST api/questions/:id/answers
// @desc    Adds a new answer to a question based on :id
// @access  Public
router.post('/:id/answers', (req, res) => {
    const newAnswer = req.body.answer;

    Question.findById(req.params.id)
        .then(question => {
            question.answers.push(newAnswer);
            question.save()
                .then(res.json(question));
        })
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
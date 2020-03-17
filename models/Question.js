const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from 'reactstrap';

export const AskQuestion = () => {
    const { question, errors, updateQuestion, throwQuestionError, resetErrors } = useContext(GlobalContext);

    const setQuestion = (questionVal) => {
        updateQuestion(questionVal);
    }

    const updateDb = () => {
        fetch('http://localhost:5000/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        });
    }

    const validate = () => {
        if (question.length < 5) {
            throwQuestionError("Questions must be 5 characters long.");
        }
        else if (question[question.length - 1] !== '?') {
            throwQuestionError("Questions must end with a question mark.");
        }
        else {
            resetErrors();
            updateDb();
        }
    }

    return (
        <>
            <form>
                <textarea id="question" rows="4" cols="50" onChange={(e) => setQuestion(e.target.value)}></textarea>
                <br></br>
                <span id="questionError" className="formError">{errors.questionError}</span>
                <br></br>
                <Button color="primary" onClick={validate}>Ask away</Button>
            </form>
        </>
    )
}

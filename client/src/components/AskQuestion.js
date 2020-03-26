import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from 'reactstrap';

export const AskQuestion = () => {
    const { addQuestion } = useContext(GlobalContext);
    const [question, setQuestion] = useState("");
    const [error, setError] = useState("");

    const submitQuestion = (newQuestion) => {
        fetch('http://localhost:5000/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: newQuestion })
        })
            .then(response => response.json())
            .then(json => addQuestion(json));
    }

    const validate = () => {
        const trimmedQuestion = question.trim();

        if (trimmedQuestion.length < 5) {
            setError('Questions must be 5 characters long.');
        }
        else if (trimmedQuestion[trimmedQuestion.length - 1] !== '?') {
            setError('Questions must end with a question mark.');
        }
        else {
            setError('');
            setQuestion('');
            submitQuestion(trimmedQuestion);
        }
    }

    return (
        <>
            <form>
                <textarea id="question" rows="4" cols="50" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                <br></br>
                <span id="questionError" className="formError">{error}</span>
                <br></br>
                <Button color="primary" onClick={validate}>Ask away</Button>
            </form>
        </>
    )
}

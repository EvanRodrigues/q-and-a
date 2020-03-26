import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from 'reactstrap';

export const AnswerQuestion = (props) => {
    const { addAnswer } = useContext(GlobalContext);
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");

    const submitAnswer = (newAnswer) => {
        fetch(`http://localhost:5000/api/questions/${props.id}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer: newAnswer })
        }).then(response => {
            setAnswer('');
            addAnswer(newAnswer);
        });
    }

    const validate = () => {
        const trimmedAnswer = answer.trim();

        if (trimmedAnswer.length < 5) {
            setError("Answers must be 5 characters long.")
        }
        else {
            setError("");
            submitAnswer(trimmedAnswer);
        }
    }

    return (
        <>
            <form>
                <textarea id="answer" rows="4" cols="50" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                <br></br>
                <span id="answerError" className="formError">{error}</span>
                <br></br>
                <Button color="primary" onClick={validate}>Answer Question</Button>
            </form>
        </>
    )
}

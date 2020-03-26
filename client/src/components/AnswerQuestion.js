import React, { useState } from 'react';
import { Button } from 'reactstrap';

export const AnswerQuestion = () => {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");

    const submitAnswer = (newAnswer) => {
    }

    const validate = () => {
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

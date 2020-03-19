import React, { useState } from 'react';
import { Button } from 'reactstrap';

export const AskQuestion = () => {
    const [question, setQuestion] = useState('');

    return (
        <>
            <form>
                <textarea id="question" val={question} onChange={(e) => setQuestion(e.target.value)} rows="4" cols="50"></textarea> <br></br>
                <Button color="primary">Ask away</Button>
            </form>
        </>
    )
}

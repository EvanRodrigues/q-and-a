import React from 'react';
import { Button } from 'reactstrap';

export const Question = () => {
    return (
        <div className="questionContainer">
            <h3>This is a question?</h3>
            <Button className="answerButton" color="primary">0 answers</Button>
        </div>
    );
}
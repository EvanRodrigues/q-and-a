import React from 'react';
import { Button } from 'reactstrap';

export const Question = (props) => {
    return (
        <div className="questionContainer">
            <a href={`http://localhost:3000/question/?id=${props.id}`}><h3>{props.question}</h3></a>
            <Button className="answerButton" color="primary">{props.answers} answers</Button>
        </div>
    );
}
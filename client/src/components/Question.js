import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Question = (props) => {
    return (
        <div className="questionContainer">
            <Link to={`/question/${props.id}`}>
                <h3>{props.question}</h3>
            </Link>
            <Button className="answerButton" color="primary">{props.answers} answers</Button>
        </div >
    );
}
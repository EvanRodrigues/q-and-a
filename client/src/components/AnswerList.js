import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AnswerList = (props) => {
    const { answers, initAnswers } = useContext(GlobalContext);
    const [question, setQuestion] = useState("");

    useEffect(() => {
        getAnswers();
    }, []);

    const getAnswers = async () => {
        fetch(`http://localhost:5000/api/questions/${props.id}/answers`)
            .then(response => { return response.json() })
            .then(json => {
                initAnswers(json.answers);
                setQuestion(json.question);
            });
    }

    if (answers === []) {
        return <h1>Loading...</h1>
    }
    return (
        <Container>
            <h1>{question}</h1>

            {answers.map((answer, index) =>
                <p key={index}>{answer}</p>)}
        </Container>
    );
}
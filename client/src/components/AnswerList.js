import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AnswerList = (props) => {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState("");

    useEffect(() => {
        getAnswers();
    }, []);

    const getAnswers = async () => {
        fetch(`http://localhost:5000/api/questions/${props.id}/answers`)
            .then(response => { return response.json() })
            .then(json => {
                setAnswers(json.answers);
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
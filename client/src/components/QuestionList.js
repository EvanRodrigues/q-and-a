import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'reactstrap';
import { Question } from './Question';

export const QuestionList = () => {
    let { questions, setQuestions } = useContext(GlobalContext);

    useEffect(() => {
        fetch('http://localhost:5000/api/questions')
            .then(response => { return response.json() })
            .then(data => { setQuestions(data); });
    });


    if (questions === null) {
        return (<h1>Loading...</h1>);
    }
    return (
        <Container>
            <h1>Questions</h1>

            <Question />
        </Container>
    );
}
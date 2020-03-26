import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container } from 'reactstrap';
import { Question } from './Question';

export const QuestionList = () => {
    let { questions, setQuestions } = useContext(GlobalContext);

    const getQuestions = async () => {
        fetch('http://localhost:5000/api/questions')
            .then(response => { return response.json() })
            .then(data => { setQuestions(data); });
    }

    useEffect(() => {
        getQuestions();
    }, []);

    if (questions === null) {
        return (<h1>Loading...</h1>);
    }
    return (
        <Container>
            <h1>Questions</h1>

            {questions.map(question =>
                <Question key={question._id} id={question._id} question={question.question} answers={question.answers.length} />
            )}
        </Container>
    );
}
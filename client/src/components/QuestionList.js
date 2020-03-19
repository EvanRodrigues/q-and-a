import React from 'react';
import { Container } from 'reactstrap';
import { Question } from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuestionList = () => {
    return (
        <Container>
            <h1>Questions</h1>

            <Question />
        </Container>
    );
}
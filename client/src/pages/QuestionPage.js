import React from 'react';
import { Container } from 'reactstrap';
import { AnswerList } from '../components/AnswerList';
import { AnswerQuestion } from '../components/AnswerQuestion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuestionPage = ({ match }) => {
    return (
        <Container>
            <Link to="/">
                <h1>Q & A</h1>
            </Link>

            <hr></hr>
            <AnswerList id={match.params.id} />
            <AnswerQuestion id={match.params.id} />
        </Container>
    );
}
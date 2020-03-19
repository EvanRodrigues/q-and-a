import React from 'react';
import { Container } from 'reactstrap';
import { QuestionList } from '../components/QuestionList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AskQuestion } from '../components/AskQuestion';

function Home() {
    return (
        <Container>
            <h1>Q & A</h1>

            <AskQuestion />

            <hr></hr>

            <QuestionList />
        </Container>
    );
}

export default Home;
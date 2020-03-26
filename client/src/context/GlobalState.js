import React, { createContext, useReducer } from 'react';
import QuestionReducer from './QuestionReducer';


//Initial state
const initialState = {
    questions: null,
    answers: []
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(QuestionReducer, initialState);

    //Actions
    function initQuestions(data) {
        dispatch({
            type: 'INIT_QUESTIONS',
            payload: data
        });
    }

    function addQuestion(data) {
        dispatch({
            type: 'ADD_QUESTION',
            payload: data
        })
    }

    function initAnswers(data) {
        dispatch({
            type: 'INIT_ANSWERS',
            payload: data
        })
    }

    function addAnswer(data) {
        dispatch({
            type: 'ADD_ANSWER',
            payload: data
        })
    }

    return (
        <GlobalContext.Provider value={{ ...state, addQuestion, initQuestions, addAnswer, initAnswers }}>
            {children}
        </GlobalContext.Provider>
    )
}
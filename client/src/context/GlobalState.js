import React, { createContext, useReducer } from 'react';
import QuestionReducer from './QuestionReducer';


//Initial state
const initialState = {
    question: "",
    errors: {
        questionError: "",
        answerError: ""
    },
    questions: null
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(QuestionReducer, initialState);

    //Actions
    function setQuestions(data) {
        dispatch({
            type: 'SET_QUESTIONS',
            payload: data
        });
    }

    function updateQuestion(data) {
        dispatch({
            type: 'UPDATE_QUESTION',
            payload: data
        })
    }

    function throwQuestionError(data) {
        dispatch({
            type: 'THROW_QUESTION_ERROR',
            payload: data
        });
    }

    function resetErrors() {
        dispatch({
            type: 'RESET_ERRORS',
        });
    }



    return (
        <GlobalContext.Provider value={{ question: state.question, questions: state.questions, errors: state.errors, setQuestions, updateQuestion, throwQuestionError, resetErrors }}>
            {children}
        </GlobalContext.Provider>
    )
}
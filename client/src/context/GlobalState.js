import React, { createContext, useReducer } from 'react';
import QuestionReducer from './QuestionReducer';


//Initial state
const initialState = {
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

    function addQuestion(data) {
        dispatch({
            type: 'ADD_QUESTION',
            payload: data
        })
    }

    return (
        <GlobalContext.Provider value={{ ...state, addQuestion, setQuestions }}>
            {children}
        </GlobalContext.Provider>
    )
}
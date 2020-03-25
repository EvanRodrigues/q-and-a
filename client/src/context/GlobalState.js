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

    return (
        <GlobalContext.Provider value={{ questions: state.questions, setQuestions }}>
            {children}
        </GlobalContext.Provider>
    )
}
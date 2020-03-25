export default (state, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        case 'UPDATE_QUESTION':
            return {
                ...state,
                question: action.payload
            }
        case 'THROW_QUESTION_ERROR':
            return {
                ...state,
                errors: {
                    answerError: "",
                    questionError: action.payload
                }
            }
        case 'RESET_ERRORS':
            return {
                ...state,
                errors: {
                    answerError: "",
                    questionError: ""
                }
            }
        default:
            return state;
    }
}
export default (state, action) => {
    switch (action.type) {
        case 'INIT_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: [action.payload, ...state.questions]
            }
        case 'INIT_ANSWERS':
            return {
                ...state,
                answers: action.payload
            }
        case 'ADD_ANSWER':
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
        default:
            return state;
    }
}
export default (state, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: [action.payload, ...state.questions]
            }
        default:
            return state;
    }
}
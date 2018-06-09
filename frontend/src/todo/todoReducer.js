import { bindActionCreators } from "redux";

const INITIAL_STATE = {
    description: '', list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_ADDED':
            return { ...state, description: '' }
        // case 'TODO_MARKED_AS_DONE':
        //     return { ...state, done: true }
        // case 'TODO_MARKED_AS_PENDING':
        //     return { ...state, done: false }
        default:
            return state
    }
}
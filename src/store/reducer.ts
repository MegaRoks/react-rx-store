import { initialState } from "./state";
import { ActionTypes } from "./types";
import { Action } from "./actions";

// const handlers = {
//     INCREMENT: state => ({...state, counter++})
// }

export function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case ActionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case ActionTypes.ADD_CUSTOM_NUMBER:
            return { ...state, counter: state.counter + action.payload }
        case ActionTypes.REMOVE_CUSTOM_NUMBER:
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
}

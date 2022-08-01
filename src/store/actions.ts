import { ActionTypes } from "./types";

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT,
    }
}

export const addCustomNumber = (payload: number) => {
    return {
        type: ActionTypes.ADD_CUSTOM_NUMBER,
        payload,
    }
}

export const removeCustomNumber = (payload: number) => {
    return {
        type: ActionTypes.REMOVE_CUSTOM_NUMBER,
        payload,
    }
}

export type Action =
    ReturnType<typeof increment>
    | ReturnType<typeof decrement>
    | ReturnType<typeof addCustomNumber>
    | ReturnType<typeof removeCustomNumber>;
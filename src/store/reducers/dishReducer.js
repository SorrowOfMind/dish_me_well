import { FORM_RESPONSE, FORM_ERROR } from "../actions/types";

const dishReducer = (state = {}, action) => {
    switch (action.type){
        case FORM_RESPONSE:
            return {...state, response: action.payload, message: "Dish was successfully registered", status: 1};
        case FORM_ERROR:
            return {...state, response: action.payload, message: "Failed to register a dish", status: 0};
        default:
            return state;
    }
}

export default dishReducer;
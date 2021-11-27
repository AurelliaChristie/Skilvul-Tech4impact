import { ADD_BOOKMARK } from "../actions";
import { combineReducers } from "redux";

function bookmarkReducers(state=[], action){
    if(action.type === "ADD_BOOKMARK"){
        return [...state, action.payload]
    }

    return state
}

export const reducer = combineReducers({
    bookmark: bookmarkReducers
}); 
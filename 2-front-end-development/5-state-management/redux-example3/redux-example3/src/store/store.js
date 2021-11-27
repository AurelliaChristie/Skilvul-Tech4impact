import { createStore } from "redux";
import { reducer } from "./reducers";

export const storeReducer = createStore(
    reducer
);
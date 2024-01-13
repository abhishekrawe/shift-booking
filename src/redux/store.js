// store.js
import { createStore } from "redux";
import shiftsReducer from "./shiftsReducer";

const store = createStore(shiftsReducer);

export default store;

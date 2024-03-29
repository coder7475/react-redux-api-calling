import { createStore, applyMiddleware } from "redux";
import todosReducer from "./redux/reducers/todosReducer";
import { thunk } from "redux-thunk";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;

import axios from "axios";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstants";

// this is a aynch action creator creates action based on data state
const getAllTodos = () => {

  return async (dispatch) => {

    dispatch({ type: GET_TODOS_REQUEST });

    try {

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });

    } catch (error) {
      dispatch({ type: GET_TODOS_FAILED, payload: error.message });

    }
  };
};

export default getAllTodos;
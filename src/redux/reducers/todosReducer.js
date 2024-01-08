
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from '../constants/todosConstants';

// initilal state
const initialState = {
  todos: [],
  isLoading: false,
  error: "",
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TODOS_SUCCESS:
      return {
        todos: action.payload,
        isLoading: false,
        error: "",
      }
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        todos: [],
        error: action.payload
      }
    default:
      return state;
  }
}

export default todosReducer;
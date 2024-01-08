import { 
  useSelector, 
  useDispatch 
} from 'react-redux';
import { useEffect } from 'react';
import getAllTodos from '../redux/actions/todoAction';

function Todos() {
  const { todos, isLoading, error } = useSelector(state => state);
  // console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch])
  
  return (
    <div>
      <h2>TODOS</h2>      

    </div>
  )
}

export default Todos

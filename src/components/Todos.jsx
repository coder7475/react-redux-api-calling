import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllTodos from "../redux/actions/todoAction";

function Todos() {
  const { todos, isLoading, error } = useSelector((state) => state);
  // console.log(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>TODOS</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
              
                <p>
                  &nbsp; &nbsp;
                  <strong>{todo.id}</strong>
                  &nbsp;                 
                  &nbsp;                 
                  <span>{todo.title}</span>
                </p>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default Todos;

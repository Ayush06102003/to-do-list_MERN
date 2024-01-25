import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/Action/todoslice';
import Card from './Card';

function Task() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
 
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading todos</div>;
  }

  return (
    <div className="row my-4">
      <div className="container">
        {todos && todos.length === 0 ? 'No tasks to display' : null}
      </div>
      {todos &&
        todos.map((todo) => {
          return <Card key={todo._id} todo={todo} />;
        })}
    </div>
  );
}

export default Task;


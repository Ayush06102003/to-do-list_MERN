import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/Action/todoslice';

function Card({todo}) {
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div className= "col-md-3 my-2">
            <div className="card">
            
                    <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{todo.name}</h5>
                        <button type="button" class="btn btn-outline-success">Complete</button>
                        <button type="button" class="btn btn-outline-danger" onClick={()=> handleDelete(todo._id)}>Delete</button>
                        
                        
                        </div>
                        <p className="card-text">{todo.description}</p>
                        
                    </div>
            </div>
        </div>
  )
}

export default Card

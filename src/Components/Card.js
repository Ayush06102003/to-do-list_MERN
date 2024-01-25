import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus } from '../redux/Action/todoslice';
import '../App.css'
function Card({todo}) {
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdateStatus = (taskId, done) => {
    dispatch(updateTaskStatus({ taskId, done: !done }));
  };
  return (
    <div className= "col-md-3 my-2">
            <div className="card">
            
                    <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className={`card-title ${todo.done ? 'completed-text' : ''}`}>{todo.name}</h5>
                        <button type="button" className="btn btn-outline-success"onClick={() => handleUpdateStatus(todo._id, todo.done)}>Complete</button>
                        <button type="button" className="btn btn-outline-danger" onClick={()=> handleDelete(todo._id)}>Delete</button>
                        
                        
                        </div>
                        <p className={`card-text ${todo.done ? 'completed-text' : ''}`}>{todo.description}</p>
                        
                    </div>
            </div>
        </div>
  )
}

export default Card

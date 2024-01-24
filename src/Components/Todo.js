import React from 'react'

function Todo() {
    return (
        <div>
            <h1 className='text-centre'>My Todo</h1>
            <div className="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Todo

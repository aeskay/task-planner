import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { Redirect } from 'react-router/cjs/react-router';
import { addNewTask, compDay, compTask, removeDay, removeTask, undoTask } from '../../features/task/taskSlice';

function Details() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    let { id } = useParams();

    
    const targetTask = useSelector(state => state.counter.parentTasks).find(item => item.id == id);
    useEffect(() => {
        if(!targetTask){
            navigate("/items/0");
        }
    }, []);
    
    const [inp, setInp] = useState('');
    const handleChange = (e) => {
        setInp(e.target.value);
        e.preventDefault();
    }

    const aa = Number(id);
    const handleNewTask = (e) => {
        if(inp !=''){
            e.preventDefault()
            dispatch(addNewTask({id: aa, name: inp}));
            setInp('')
        } else {
            alert("Empty task not allowed!")
        }
        
    }

    const handleComplete = () => {
        let conf = window.confirm("Mark this day as complete?");
        if (conf) {
            dispatch(compDay({id:Number(id)}));
        } else {
            alert("Action canceled");
        }
        
    }

    const handleDelete = () => {
        const conf = window.confirm("Are you sure you want to delete?");
        if (conf) {
            dispatch(removeDay({id:Number(id)}))
        } else {
            return;
        }
    }

    const handleTaskComplete = (index) => {
        const aa = Number(id);
        dispatch(compTask({id:aa, index:index}))
        
    }

    const handleTaskUndo = (index) => {
        const aa = Number(id);
        dispatch(undoTask({id:aa, index:index}))
        
    }

    const handleTaskDelete = (index) => {
        const aa = Number(id);
        dispatch(removeTask({id:aa, index:index}))
    }

    let percentage;
    let itemsLength;
    if(targetTask){
        itemsLength = targetTask.tasks.length;
        let compItems = 0;
        for (let j = 0; j < itemsLength; j++) {
            if (targetTask.tasks[j].comp) {
                compItems++
            }
        }
        percentage = Math.floor((compItems/itemsLength)*100);
    }

    return (
        <div className=''>
            { targetTask ? 
            <div>           
                <div className='title-elements'>
                    <div><h3 className='text-center task-title'>{targetTask.name}</h3></div>
                    <div>
                        <span  className='title-icons'>
                            <i data-title='Mark as Complete' onClick={handleComplete} className="fa-solid fa-circle-check comp-icon"></i>
                            <i data-title='Delete this Day' onClick={handleDelete} className="fa-solid fa-trash del-icon"></i>
                        </span>
                    </div>
                </div>
                <hr />
                <div className='progressBar'>
                    <div className='perc-done'>Percentage Done:</div>
                    <div>
                        <div className="top-box"></div>
                        <div className="bottom-box" style={{width: percentage*2}}></div>
                    </div>
                    <div className='percentage'> {itemsLength===0 ?100:percentage }%</div>
                </div>
                <form className="form-inline" onSubmit={handleNewTask}>
                    <div className="input-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Enter a new task here" aria-label="Search" onChange={handleChange} value={inp}/>
                        <button className="btn btn-light my-2 my-sm-0 addTaskBtn" type='submit' ><i className="fa-solid fa-plus"></i></button>
                    </div>
                </form>

                <div className='tasksList'>
                    { targetTask.tasks.length != 0?
                        targetTask.tasks.map(item => {
                            return (
                                <div key={item.index} className='task' style={{background: item.comp? 'rgba(25, 135, 84, 0.3)': null}}>
                                    <div>
                                        <h6>{item.task}</h6>
                                    </div>
                                    <div>
                                        <span  className='task-icons'>
                                            {item.comp? 
                                            <i data-title='Redo this Task' onClick={() => handleTaskUndo(item.index)} className="fa-solid fa-rotate-right task-comp-icon"></i>: 
                                            <i data-title='Mark as Complete' onClick={() => handleTaskComplete(item.index)} className="fa-solid fa-circle-check task-comp-icon"></i>}
                                            <i data-title='Delete this Task' onClick={() => handleTaskDelete(item.index)} className="fa-solid fa-trash task-del-icon"></i>
                                        </span>
                                    </div>
                                </div>
                            )
                        }) : 
                        <div>
                            <h5>Looks like the day is empty.</h5>
                            <p>Why dont you add some tasks above? :-)</p>
                        </div>
                    }
                </div> 
            </div> : 
            <div>
                <h3 className='text-center task-title item-deleted'>WELL THEN, POOF!!!</h3>
            </div>
}
        </div>
    )
}

export default Details

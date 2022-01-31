import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewDay } from '../../features/task/taskSlice';

function Navigation() {
    const dispatch = useDispatch();

    const [newDay, setNewDay] = useState('');

    const toggleAddForm = (e)=>{
        const hiddenForm = document.querySelector('.hiddenForm');
        hiddenForm.classList.toggle('hide');
        e.preventDefault()
    }

    const handleChange = (e) => {
        setNewDay(e.target.value);
    }

    const handleNewDay = (e) => {
        if (newDay!='') {
            e.preventDefault();
            var newDate = new Date().toLocaleString();
            dispatch(addNewDay({name: newDay, date: newDate}));

            const hiddenForm = document.querySelector('.hiddenForm');
            hiddenForm.classList.toggle('hide');
            setNewDay('')
        } else {
            alert("Empty day not allowed!")
        }
    }
    return (
        <div className='navigation'>
            <nav className="navbar navbar-light  justify-content-between">
                <a className="navbar-brand" href='/'>TASK PLANNER</a>
                <form className="form-inline">
                    <div className="input-group">  
                        <button className="btn btn-success my-2 my-sm-0" onClick={toggleAddForm}>
                        <i className="fa-solid fa-plus"></i> Create New</button>
                    </div>
                </form>
                <div className="hiddenForm hide">
                    <form className="form-inline" onSubmit={handleNewDay}>
                    <div className="input-group">
                        <input value={newDay} className="form-control mr-sm-2" type="search" placeholder="These are tasks for which day?" aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-light my-2 my-sm-0" type='submit' ><i className="fa-solid fa-plus"></i></button>
                    </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navigation

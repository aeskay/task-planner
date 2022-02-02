import React from 'react'
import { useSelector } from 'react-redux'

function MainBody() {

    const items = useSelector(state => state.counter.parentTasks)
    console.log(items)
    return (
        <div>
            <div className='section'>
                <div>
                    <h4 className='task-title'>Organize Your Tasks</h4>
                    <p className='subtitle'>A simple task management application that enables you to plan and manage everyday tasks.</p>
                </div>
                <div><img src="/images/0.png" alt="Templates" className='img-fluid'/></div>
            </div>

            

            <div className='section section-alt'  style={{marginTop: 60}}>
                
                <div><img src="/images/3.png" alt="Templates" className='img-fluid'/></div>
                <div>
                    <h4 className='task-title'>Track Your Completion</h4>
                    <p className='subtitle'>You can easily see the percentage of your work done. Mark each task or day as complete, delete task/day, add as many tasks as you want and keep track of all.</p>
                </div>
            </div>

            <div className='section' style={{marginTop: 60}}>
            <div>
                    <h4 className='task-title'>Ready-Made Templates</h4>
                    <p className='subtitle'>You have access to free templates with sample tasks that allow you to get started easily.</p>
                </div>
                <div className='sec-col'>
                    <img src="/images/1.png" alt="Templates" className='img-fluid '/>
                </div>
                
            </div>
        </div>

        
    )
}

export default MainBody

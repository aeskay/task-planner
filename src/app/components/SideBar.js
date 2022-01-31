import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SideBar() {

    const items = useSelector(state => state.counter.parentTasks)
    const reverseItems = [...items].reverse()

    return (
        <div>
            {
                reverseItems.map(item => {
                    const itemsLength = item.tasks.length;
                    
                    let compItems = 0;
                    for (let j = 0; j < itemsLength; j++) {
                        if (item.tasks[j].comp) {
                            compItems++
                        }
                    }
                    
                    let percentage = ((compItems/itemsLength));
                    let btnWidth = percentage * 20.3;
                    return(
                        <div key={item.id}>
                            <Link to={`items/${item.id}`} style={{textDecoration: 'none'}}>
                                <div className='itemTab'>
                                    <div className='itemHeadDiv'><h6 className='itemTabHead'>{item.name}</h6> {item.tag == 'Template'? <span className="badge item-template-badge">{item.tag}</span>: item.tag == 'New'? <span className="badge item-new-badge">{item.tag}</span> : null}</div>
                                    <span className='itemTabDate' style={{fontSize:12}}>Created on {item.date}</span>
                                    { 
                                        <div className='progressBarm'>
                                        
                                        <div>
                                            <div className="top-boxm"></div>
                                            <div className="bottom-boxm" style={{width: `${btnWidth}vw`}}></div>
                                        </div>
                                        
                                    </div>}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar

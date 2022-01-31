import React from 'react'
import { useSelector } from 'react-redux'

function MainBody() {

    const items = useSelector(state => state.counter.parentTasks)
    console.log(items)
    return (
        <div>
            This becomes the mainbody
        </div>
    )
}

export default MainBody

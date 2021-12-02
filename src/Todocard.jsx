import React from 'react'

export const Todocard = ({task,i}) => {
    return (
        <div>
            
                <h2> {task.action}</h2>
                    <button>complete</button>
                    <button>delete</button>
            
        </div>
    )
}
export default Todocard;

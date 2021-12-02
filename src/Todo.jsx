import React from 'react'
import Todocard from './Todocard'
export const Todo = (props) => {
    return (
        <div className="App">
      {props.list.map(el=>
      <Todocard task={el}/>)}
           
        </div>
    )
}
export default Todo;


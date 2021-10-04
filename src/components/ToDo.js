import React from "react";

export default props =>
<div className='align-self-center align-items-center d-flex position-relative todo shadow-sm mb-3'>
    
    <div className='flex-grow-1 text-center' style={{
      textDecoration: props.todo.complete ? 'line-through': ""
    }} onClick={props.toggleComplete}> {props.todo.text} </div>
    <button className='x-button mr-3 p-2 position-absolute' onClick={props.onDelete}>X</button>
</div> 
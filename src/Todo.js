import React from 'react'

const Todo = (props) => {
    return (
        <>
        <div className="todo_style">
        <li>{props.id +1})</li>
        <li>{props.listofitem}</li>
        <button className="delete" onClick= { () => {
            props.listSelect(props.id);
        }}>X</button>
        </div>
        </>
    );
}
export default Todo;
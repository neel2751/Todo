import React from 'react'

const Todo = (props) => {
    return (
        <>
        <div className="todo_style">
        <button className="delete" onClick= { () => {
            props.listSelect(props.id);
        }}>X</button>
        <li>{props.listofitem}</li>
        </div>
        </>
    );
}
export default Todo;
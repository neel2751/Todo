import React, { useState } from 'react';
import Todo from './Todo'

const App = () => {

    const [itemList, newitemList] = useState("");
    const [addItem, newaddItem] = useState([]);

    const itemEvent = (e) => {

      newitemList(e.target.value);
    };

    const listAdd = () => {
      if(itemList === ("")){
        alert("Please Enter Item");
      }else{
      newaddItem( (oldItem) => {
        return [...oldItem, itemList];
      });
      newitemList("");
    }
    };


    const deleteItem = (id) =>{
      console.log("Item Deleted");
      newaddItem( (oldItem) => {
        return oldItem.filter((arr,index) => {
          return index !== id;
        })
      })
    }

  return (
    <>
    <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>Todo List</h1>
      <br/>
      <input type="text" value={itemList} placeholder="Add Items" onChange={itemEvent} />
      <button className="newBtn" onClick={listAdd}> + </button>
      <div className="list">
      <ol>
        {/* <li>{itemList}</li> */}

       {addItem.map( (itemvalue, index) => {
          return <Todo 
                    key={index} 
                    id={index} 
                    listofitem = {itemvalue}
                    listSelect = {deleteItem}
                    />;
      })}

      </ol>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;

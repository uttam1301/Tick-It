import React, { useState } from 'react';
import InputArea from './components/InputArea';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState([]);
  function addItem(inputText){
    setItems(prevItems =>{
      return [...prevItems, 
        { id: uuidv4(), text: inputText }
      ];
    });
  }
  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item)=>{
        return item.id !== id;
      });
    });
  }
  function editItem(id, newText){
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  }  

  console.log(items);
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Tick-It</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem)=>{
              return <TodoList 
                key={todoItem.id}
                id={todoItem.id}
                text={todoItem.text}
                onEdit={editItem}
                onChecked={deleteItem}
              />
            })}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App

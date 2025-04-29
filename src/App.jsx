import React, { useState } from 'react';
import InputArea from './components/InputArea';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);
  let date;
  function addItem(inputText){
    setItems(prevItems =>{
      return [...prevItems, inputText];
    });
    date = new Date();
  }
  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((item, index)=>{
        return index !== id;
      });
    });
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
            {items.map((todoItem, index)=>{
              return <TodoList 
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
                date={date}
              />
            })}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App

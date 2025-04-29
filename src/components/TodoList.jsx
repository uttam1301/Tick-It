import React, { useState } from "react";

function TodoList(props) {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckbox(event){
        setIsChecked(event.target.checked)
    }

  return (
    <div className="todo">
        <label>
            <input 
                type="checkbox" 
                onChange={handleCheckbox} 
            />
            <li style={{textDecoration: isChecked ? "line-through" : "none"}} >{props.text}</li>
        
            <button
                onClick={() => {
                props.onChecked(props.id);
                }}
            >
            <span>Delete</span>  
            </button>
            <p>{props.date}</p>
        </label>
    </div>
  );
}

export default TodoList;

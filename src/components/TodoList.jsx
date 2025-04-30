import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

function TodoList(props) {

    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.text);

    function handleCheckbox(){
        setIsChecked(prev => !prev);
    }
    function handleEdit(){
        setIsEditing((prev) => !prev);
    }
    function handleTextChange(event){
        setEditedText(event.target.value);
    }
    function handleSave(){
        props.onEdit(props.id, editedText);
        setIsEditing(false);
    }

  return (
    <div className="todo">
        <div className="todo-left" onClick={handleCheckbox} style={{ cursor: 'pointer' }}>
            <input 
                type="checkbox" 
                onChange={handleCheckbox} 
                checked={isChecked}
                onClick={(e) => e.stopPropagation()}
            />
            {isEditing ? 
                <input 
                className="edit"
                type="text" 
                value={editedText} 
                onChange={handleTextChange}
                onClick={(e) => e.stopPropagation()}
                /> : 
                <span style={{textDecoration: isChecked ? "line-through" : "none", marginLeft:"8px"}} >{props.text}</span>
            }
        </div>
        <div className="todo-buttons">
            {isEditing ? (<button onClick={handleSave}><DoneIcon /></button>) : (<button onClick={handleEdit}> <EditIcon /> </button>)}
            <button
                onClick={() => {
                props.onChecked(props.id);
                }}
            >
            <DeleteIcon />  
            </button>
        </div>
    </div>
  );
}

export default TodoList;

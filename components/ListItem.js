import React from "react";
import { VscCheck, VscChromeMaximize } from "react-icons/vsc"

function ListItem({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }){
    const { id, title, checked } = todo;
    return(
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? (<VscCheck onClick={() => {onCheckToggle(id);}} />) : (<VscChromeMaximize onClick={() => {onCheckToggle(id);}} />)}
                <div className="text" onClick={()=>{
                    onChangeSelectedTodo(todo);
                    onInsertToggle();
                }}>{ title }</div>
            </div>
        </div>
    );
};

export default ListItem;
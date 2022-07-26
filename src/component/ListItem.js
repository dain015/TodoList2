import React, { useState } from "react";
import { VscCheck, VscChromeMaximize, VscEdit, VscTrash } from "react-icons/vsc"



function ListItem({ todo, onCheckToggle,onRemove }){
    const [iconToggle, setIconToggle] = useState(false);
    const { id, title, completed } = todo;


    const onIconToggle = () => {
        setIconToggle(prev => !prev)
      }

    return(
        <div className="TodoItem">
            <div className={`content ${completed ? 'completed' : ''}`}>
                {completed ? (<VscCheck onClick={() => {onCheckToggle(id);}} />) : (<VscChromeMaximize onClick={() => {onCheckToggle(id);}} />)}
                <div className="text" onClick={onIconToggle}>{ title }</div>
            </div>
            {iconToggle && 
            <div className="color" >
                <VscEdit />
                <VscTrash onClick={() => {onRemove(id)}}/>
            </div>}
            
        </div>
    );
};

export default ListItem;
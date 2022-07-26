import React from "react";
import ListItem from "./ListItem";

function TodoList({ todos, onCheckToggle, onRemove }){
    return(
        <div className="TodoList">
            {todos.map(todo => (
                <ListItem onRemove={onRemove} todo={ todo } key={ todo.id } onCheckToggle={onCheckToggle}/>
            ))}
        </div>
    );
};

export default TodoList;



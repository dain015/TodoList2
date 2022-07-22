import React from "react";
import ListItem from './ListItem';

function TodoList({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo }){
    return(
        <div className="TodoList">
            {todos.map(todo => (
                <ListItem todo={ todo } key={ todo.id } onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo} />
            ))}
        </div>
    );
};

export default TodoList;
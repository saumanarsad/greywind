import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css'
const TodoList: React.FC = () => {
    return (
        <div className="todo_container">
            <ol>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ol>
        </div>
    );
}

export default TodoList
import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css'
const TodoList: React.FC = () => {
    return (
        <div className="todo_container">
            <ol>
                <TodoItem title="I" />
                <TodoItem title="Am" />
                <TodoItem title="Sauman" />
                <TodoItem title="Arshad" />
            </ol>
        </div>
    );
}

export default TodoList
import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import './TodoList.css'

interface TodoItem {
    id: number;
    title: string;
}
interface TodoProps {
    items: TodoItem[];
}

const TodoList: React.FC<TodoProps> = (props) => {
    return (
        <div className="todo_container">
            <ol>
                {
                    props.items.map(item => <TodoItem title={item.title} key={item.id} />)
                }
            </ol>
        </div>
    );
}

export default TodoList
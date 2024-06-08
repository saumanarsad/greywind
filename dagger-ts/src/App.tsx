import React from "react";
import TodoList from "./components/Todo/TodoList";
import Counter from "./components/Counter/counter";
const myItems = [
    {
        'id': 1,
        'title': 'My name is sauman',
    },
    {
        'id': 2,
        'title': 'My name is Ali',
    },
    {
        'id': 3,
        'title': 'My name is Mohid',
    },
    {
        'id': 4,
        'title': 'My name is Kamran',
    },

]

const App: React.FC = () => {
    return (
        <div>
            <TodoList items={myItems} />
            <Counter />
        </div>
    );
}
export default App;
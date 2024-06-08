import React, { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import Counter from "./components/Counter/counter";
import { stat } from "fs";
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
    let [state, setState] = useState<boolean>(true);
    let update = () => {
        setState(!state);
    }
    return (
        <div>
            <TodoList items={myItems} />
            <button onClick={update}>Toggle</button>
            {state ? <Counter /> : null}
        </div>
    );
}
export default App;
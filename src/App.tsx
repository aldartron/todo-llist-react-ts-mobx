import React from 'react';
import './App.css';
import {Provider} from "mobx-react";
import {TodoStore} from "./stores/TodoStore";
import {TodoForm} from "./components/TodoForm/TodoForm";
import {TodoList} from "./components/TodoList/TodoList";
import {TodoInfo} from "./components/TodoInfo/TodoInfo";

const App: React.FC = () => {
    const store = new TodoStore();
    return (
        <Provider todoStore={store}>
            <div className="App">
                <TodoInfo/>
                <TodoForm/>
                <TodoList/>
            </div>
        </Provider>
    );
};

export default App;

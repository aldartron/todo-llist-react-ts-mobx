import React from "react";
import {inject, observer} from "mobx-react";
import {TodoItem} from "../TodoItem/TodoItem";
import {todoStore} from "../../stores/TodoStore";

const TodoListComponent = () => {
    let todoList = todoStore.sortedTodoList;
    return (
        <div id={'list-container'}>
            {todoList.map((todo) => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
};

export const TodoList = inject('todoStore')(observer(TodoListComponent));

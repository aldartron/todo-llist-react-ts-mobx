import {Todo, todoStore} from "../../stores/TodoStore";
import {inject, observer} from "mobx-react";
import React from "react";
import "./style.css"

const TodoItemComponent = (props: {todo: Todo}) => {
    let todo = props.todo;
    let style = '';

    if (todo.isComplete) {
        style = ' complete '
    } else {
        style = ' prior-' + todo.priority
    }

    const onClick = () => {
        todoStore.toggleTodo(todo)
    };

    const onClose= () => {
        todoStore.removeTodo(todo)
    };

    return (
        <div onClick={onClick}
             className={'item-container panel' + style}
        >
            <div className={'task-block'}>{ props.todo.task }</div>
            <div onClick={onClose}
                 className={'close-block'}
            > </div>
        </div>
    );
};

export const TodoItem = inject('todoStore')(observer(TodoItemComponent));
import {inject} from "mobx-react";
import {Todo, todoStore} from "../../stores/TodoStore";
import React from "react";

const TodoToggleButtonComponent = (props: { todo: Todo }) => {
    const onClick = () => {
        todoStore.toggleTodo(props.todo)
    };

    return (
        <div onClick={onClick}
             className={'control-block'}
        >
            <span role={'img'} aria-label={'Toggle'}>
                {props.todo.isComplete ? '✔' : '❗'}
            </span>
            ️</div>
    )
};

export const TodoToggleButton = inject('todoStore')(TodoToggleButtonComponent);
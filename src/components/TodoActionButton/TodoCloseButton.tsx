import {inject, observer} from "mobx-react";
import {Todo, todoStore} from "../../stores/TodoStore";
import React from "react";

const TodoCloseButtonComponent = (props: { todo: Todo }) => {
    const onClose = () => {
        todoStore.removeTodo(props.todo)
    };

    return (
        <div onClick={onClose}
             className={'control-block'}
        >
            <span role={'img'} aria-label={'Close'}>❌</span>
        </div>
    )
};

export const TodoCloseButton = inject('todoStore')(observer(TodoCloseButtonComponent));
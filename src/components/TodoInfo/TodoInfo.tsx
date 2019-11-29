import React from "react";
import {inject, observer} from "mobx-react";
import {todoStore} from "../../stores/TodoStore";
import "./style.css"

const TodoInfoComponent = () => {
    let incompleteCount = todoStore.incompleteTodoCount;
    let allCount = todoStore.allTodoCount;
    return (
        <div id={'info-container'}
             className={'panel'}
        >
            There are
            <br/>
            <strong>{incompleteCount}</strong> of <strong>{allCount}</strong> tasks
            <br/>
            left to do
        </div>
    )
};

export const TodoInfo = inject('todoStore')(observer(TodoInfoComponent));
import {Todo, todoStore} from "../../stores/TodoStore";
import {inject, observer} from "mobx-react";
import React from "react";
import "./style.css"
import {TodoTaskWrapper} from "../TodoTask/TodoTaskWrapper";
import {TodoEditButton} from "../TodoActionButton/TodoEditButton";
import {TodoToggleButton} from "../TodoActionButton/TodoToggleButton";
import {TodoCloseButton} from "../TodoActionButton/TodoCloseButton";
import {Route, Switch} from "react-router";
import {TodoCancelButton} from "../TodoActionButton/TodoCancelButton";

const TodoItemComponent = (props: { todo: Todo }) => {
    let todo = props.todo;
    let style;

    if (todo.isComplete) {
        style = ' complete '
    } else {
        style = ' prior-' + todo.priority
    }

    return (
        <div className={'item-container panel' + style}>
            <TodoToggleButton todo={todo}/>
            <div className={'task-block'}>
                <TodoTaskWrapper todo={todo}/>
            </div>
            <Switch>
                <Route path={'/' + todo.id + '/edit/:id'} render={() => (
                    <TodoCancelButton/>
                )}/>
                <Route render={() => (<TodoEditButton todo={todo}/>)}/>
            </Switch>
            <TodoCloseButton todo={todo}/>
        </div>
    );
};

export const TodoItem = inject('todoStore')(observer(TodoItemComponent));
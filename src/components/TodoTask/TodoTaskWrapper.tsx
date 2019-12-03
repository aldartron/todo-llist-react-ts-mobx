import React from "react";
import {Route, Switch} from "react-router";
import {Todo} from "../../stores/TodoStore";
import {TodoTaskEditor} from "./TodoTaskEditor";
import "./style.css"

const TodoTaskWrapperComponent = (props: { todo: Todo }) => {
    return (
        <Switch>
            <Route path={'/' + props.todo.id + '/edit/:id'}
                   component={TodoTaskEditor}
            />
            <Route path={'/'} render={() => (
                <span className={props.todo.isComplete ? 'completed ' : ''}>
                    {props.todo.task}
                </span>
            )}/>
        </Switch>
    )
};

export const TodoTaskWrapper = TodoTaskWrapperComponent;

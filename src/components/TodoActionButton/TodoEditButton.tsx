import {Todo} from "../../stores/TodoStore";
import React from "react";
import {Link} from "react-router-dom";

const TodoEditButtonComponent = (props: { todo: Todo }) => {

    return (
        <div className={'control-block'}>
            <Link to={'/' + props.todo.id + '/edit/' + props.todo.id}>
                <span role={'img'} aria-label={'Edit'}>✎</span>
            </Link>
        </div>
    )
};

export const TodoEditButton = TodoEditButtonComponent;
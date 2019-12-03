import React from "react";
import {Link} from "react-router-dom";

const TodoCancelButtonComponent = () => {
    return (
        <div className={'control-block'}>
            <Link to={'/'}>
                <span role={'img'} aria-label={'Cancel'}>🚫</span>
            </Link>
        </div>
    )
};

export const TodoCancelButton = TodoCancelButtonComponent;
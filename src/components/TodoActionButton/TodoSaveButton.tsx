import React from "react";

interface Props {
    onSave(): void
}

export const TodoSaveButton = (props: Props) => {
    return (
        <div onClick={props.onSave}
             className={'control-block'}
        >
            <span role={'img'} aria-label={'Save'}>💾</span>
        </div>
    )
};
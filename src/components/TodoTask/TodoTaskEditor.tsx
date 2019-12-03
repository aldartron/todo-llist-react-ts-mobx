import React, {ChangeEvent, Component} from "react";
import {observable} from "mobx";
import {Redirect, RouteComponentProps} from "react-router";
import {inject, observer} from "mobx-react";
import {Priority, todoStore} from "../../stores/TodoStore";
import {TodoSaveButton} from "../TodoActionButton/TodoSaveButton";
import "./style.css"

interface Props extends RouteComponentProps<{ id: string }> {
}

@inject("todoStore")
@observer
export class TodoTaskEditor extends Component<Props> {
    @observable private task = "";
    @observable private priority: Priority = 2;
    @observable private isError = false;
    @observable private isRedirect = false;

    private id: number = +this.props.match.params.id;

    componentDidMount(): void {
        let todo = todoStore.todoById(this.id);
        if (todo) {
            this.task = todo.task;
            this.priority = todo.priority;
        } else {
            this.isError = true;
        }
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.task = e.target.value;
    };

    save = () => {
        todoStore.updateTodo(this.id, this.task, this.priority);
        this.isRedirect = true;
    };

    onPriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let value = +e.target.value;
        if (value === 1) {
            this.priority = 1
        } else if (value === 2) {
            this.priority = 2
        } else if (value === 3) {
            this.priority = 3
        }
    };

    render() {
        if (this.isError) {
            return <strong>ERROR</strong>
        } else if (this.isRedirect) {
            return <Redirect to={'/'}/>
        } else {
            return (
                <div className={'todo-editor'}>
                    <div className={'task-edit'}>
                        <input onChange={this.onChange} value={this.task} type="text"/>
                    </div>
                    <div className={'priority-edit'}>
                        <select onChange={this.onPriorityChange}
                                value={this.priority}
                        >
                            <option value={1}>Low</option>
                            <option value={2}>Normal</option>
                            <option value={3}>High</option>
                        </select>
                    </div>
                    <TodoSaveButton onSave={this.save}/>
                </div>
            );
        }
    };
}

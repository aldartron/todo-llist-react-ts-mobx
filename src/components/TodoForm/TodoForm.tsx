import React, {ChangeEvent, Component, createRef} from "react";
import {observable} from "mobx";
import {Priority, todoStore} from "../../stores/TodoStore";
import {inject, observer} from "mobx-react";
import "./style.css"

@inject("todoStore")
@observer
export class TodoForm extends Component {

    @observable private task: string = "";
    @observable private priority: Priority = 2;

    taskInput = createRef<HTMLTextAreaElement>();
    priorityInput = createRef<HTMLSelectElement>();

    onTaskChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.task = e.target.value;
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

    saveTodo = (e: React.MouseEvent) => {
        if (this.task) {
            todoStore.addTodo(this.task, this.priority);
            this.task = ''
        }
    };

    render() {
        return (
            <div id={'form-container'}
                 className={'form prior-' + this.priority}
            >
                <textarea ref={this.taskInput}
                          onChange={this.onTaskChange}
                          value={this.task}
                />
                <select ref={this.priorityInput}
                        onChange={this.onPriorityChange}
                        value={this.priority}
                >
                    <option value={1}>Low</option>
                    <option value={2}>Normal</option>
                    <option value={3}>High</option>
                </select>
                <button onClick={this.saveTodo}> DO IT!</button>
            </div>
        )
    }
}

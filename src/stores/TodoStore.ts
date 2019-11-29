import {action, computed, observable, reaction} from "mobx";

/**
 * Task's priority from lower to higher
 */
export type Priority = 1 | 2 | 3

export interface Todo {
    task: string
    priority: Priority
    isComplete: boolean
}

export class TodoStore {

    @observable todoList: Todo[] = [];

    constructor() {
        this.todoList = [
            {task: "Make America great again", priority: 2, isComplete: false},
            {task: "Fly to the Moon", priority: 1, isComplete: false},
            {task: "Become a java-developer", priority: 3, isComplete: true}
        ];
    }

    @computed
    get sortedTodoList(): Todo[] {
        return this.todoList.slice().sort(
            (a, b) => {
                if (a.isComplete && !b.isComplete) {
                    return 1
                }
                if (!a.isComplete && b.isComplete) {
                    return -1
                }
                return b.priority - a.priority
            }
        );
    };

    @computed
    get incompleteTodoCount(): number {
        return this.todoList
            .filter(todo => !todo.isComplete)
            .length
    }

    @computed
    get allTodoCount(): number {
        return this.todoList.length
    }

    @action
    addTodo(task: string, priority?: Priority) {
        console.log(this.todoList);
        this.todoList.push({
            task: task,
            priority : priority ? priority : 2,
            isComplete: false
        })
    }

    @action
    toggleTodo(todoToToggle: Todo) {
        let todo = this.todoList.find(
            todo => todo === todoToToggle
        );

        if (todo) {
            todo.isComplete = !todo.isComplete;
        }
    }

    @action
    removeTodo(todoToRemove: Todo) {
        let todo = this.todoList.find(
            todo => todo === todoToRemove
        );
        if (todo) {
            this.todoList.splice(
                this.todoList.indexOf(todo), 1
            );
        }
    }

}

export const todoStore = new TodoStore();

import {action, computed, observable} from "mobx";

/**
 * Task's priority from lower to higher
 */
export type Priority = 1 | 2 | 3

export interface Todo {
    id: number
    task: string
    priority: Priority
    isComplete: boolean
}

export class TodoStore {
    @observable todoList: Todo[] = [];

    constructor() {
        this.todoList = [
            {id: 1, task: "Make America great again", priority: 2, isComplete: false},
            {id: 2, task: "Fly to the Moon", priority: 1, isComplete: false},
            {id: 3, task: "Become a java-developer", priority: 3, isComplete: true}
        ];
    }

    todoById(id: number): Todo | undefined {
        return this.todoList.find(todo => todo.id === id)
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
        this.todoList.push({
            id: this.todoList.length + 1,
            task: task,
            priority : priority ? priority : 2,
            isComplete: false
        })
    }

    @action
    updateTodo(id: number, task: string, priority: Priority) {
        let todo = this.todoList.find(
            todo => todo.id === id
        );
        if (todo) {
            todo.task = task;
            todo.priority = priority
        }
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

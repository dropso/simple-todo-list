import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Task} from './task';

@Injectable()
export class TasksService {

    tasks: Array<Task> = [
        {id: 'task01', title: 'first task', description: 'Lorem ipsum task 1'},
        {id: 'task02', title: 'second task', description: 'Lorem ipsum task 2'}
    ];

    constructor() {

    }

    getTasks(): Array<Task>  {
        return this.tasks;
    }

    getTask(id: string): Task {
       return this.tasks.find(x => x.id === id);
    }

    getDefaultTask(): Task {
       return {id: '', title: '', description: ''};
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

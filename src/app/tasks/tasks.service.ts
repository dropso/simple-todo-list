import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import {Task} from './task';

@Injectable()
export class TasksService {

    tasks: Array<Task> = [];

    constructor(private httpClient: HttpClient) {

    }

    getTasks(): Observable<Array<Task>>  {
        if (this.tasks.length === 0) {
            return  this.httpClient.get("http://localhost:3000/assets/tasks.json").map(data => {
            this.tasks = data['tasks'];
            return data['tasks'];
            });
        } else {
            return Observable.create(observer => {
                observer.next(this.tasks);
                observer.complete();
            });
        }
    }

    getTask(id: string): Task {
       return this.tasks.find(x => x.id === id);
    }

    getDefaultTask(): Task {
       return {id: '', title: '', description: '', isDone: false};
    }

    getDoneTasks(): number {
        return this.tasks.map(task => {
            if (task.isDone) { return 1; }
            else {return 0; }
        }).reduce((a, b) => a + b, 0);
    }

    getNotDoneTasks(): number {
        return this.tasks.length - this.getDoneTasks();
    }

    compareTasks(t1: Task, t2: Task): boolean  {
        return false;
    }

    addTask(task: Task): boolean {
        let filtered = this.tasks.filter(t => ((t.title === task.title) && (t.description === t.description)));
        if (filtered.length > 0){
            return false;
        }
        this.tasks.push(task);
        return true;
    }

    updateTask(task: Task) {
        const ind = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[ind] = task;
    }

    removeTask (task: Task) {
        this.tasks.splice(this.tasks.findIndex(t => t.id === task.id), 1);
    }
}

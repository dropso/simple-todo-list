import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Task} from './task';

@Injectable()
export class TasksService {

    tasks: Array<Task> = [
        {id: 'task01'},
        {id: 'task02'}
    ];

    constructor(/*private http: HttpClient*/) {

    }

    getTasks(): Array<Task>  {
        return this.tasks;
    }
}

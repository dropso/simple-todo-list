import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {

    tasks: Array<{id}> = [
        {id: 'task001'},
        {id: 'task002'}
    ];

    constructor(private http: HttpClient) {

    }

    getTasks(): Array<{id}>  {
        //const result = this.http.get<Array< {id}> >('http://localhost:8000/data/test.json').map(x => x['tasks']).;
        return this.tasks;
    }
}

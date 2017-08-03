import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private tasksService: TasksService) {
    this.tasks = [];
   }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

}

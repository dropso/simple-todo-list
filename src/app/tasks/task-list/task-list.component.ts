import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TasksService} from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;
  currentFilter: string;
  constructor(private tasksService: TasksService, private router: Router) {
    this.tasks = [];
   }

  displayDoneTasks(): number {
    return this.tasksService.getDoneTasks();
  }

  displayNotDoneTasks(): number {
    return this.tasksService.getNotDoneTasks();
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}

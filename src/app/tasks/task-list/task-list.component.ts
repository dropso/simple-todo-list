import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TasksService} from '../tasks.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private tasksService: TasksService,private router:Router) {
    this.tasks = [];
   }

  showTask(task:Task) {
    this.router.navigate(['/tasks/' + task.id]);
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

}

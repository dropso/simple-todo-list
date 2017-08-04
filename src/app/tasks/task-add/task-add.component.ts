import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  newTask: Task;
  constructor(private router: Router, private tasksService: TasksService) {
    this.newTask = this.tasksService.getDefaultTask();
   }

  ngOnInit() {
  }
  onSubmit() {
    this.tasksService.addTask(this.newTask);
    this.router.navigate(['../']);
  }
  onCancel() {
    this.router.navigate(['../']);
  }
}

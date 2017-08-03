import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

}

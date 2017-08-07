import { Component, OnInit, Input } from '@angular/core';
import {TasksService} from '../tasks.service';
import { Router } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-task-tile',
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.css']
})
export class TaskTileComponent implements OnInit {
  @Input() task: Task;
  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
  }

  showTask() {
    this.router.navigate(['/tasks/' + this.task.id]);
  }
  removeTask() {
    this.tasksService.removeTask(this.task);
    this.router.navigate(['/tasks/']);
  }

}

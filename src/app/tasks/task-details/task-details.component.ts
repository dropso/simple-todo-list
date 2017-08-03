import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { Router, ActivatedRoute } from "@angular/router";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  task: Task;
  constructor(private tasksService: TasksService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) {
    
   }

  goToList() {
    this.router.navigate(['/tasks/']);
  }
  ngOnInit() {
    let taskId = this.activatedRoute.snapshot.params['id'];
    this.task = this.tasksService.getTask(taskId);
  }

}

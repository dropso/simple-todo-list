import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-add-btn',
  templateUrl: './task-add-btn.component.html',
  styleUrls: ['./task-add-btn.component.css']
})
export class TaskAddBtnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showAddTask() {
    this.router.navigate(['/tasks/add']);
  }

}

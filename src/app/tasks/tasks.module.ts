import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksService} from './tasks.service';
import { TaskAddComponent } from './task-add/task-add.component';
import { RouterModule } from '@angular/router';
import { TaskAddBtnComponent } from './task-add-btn/task-add-btn.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TasksService
  ],
  declarations: [TaskListComponent, TaskDetailsComponent, TaskAddComponent, TaskAddBtnComponent]
})
export class TasksModule { }

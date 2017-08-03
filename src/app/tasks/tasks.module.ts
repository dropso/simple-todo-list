import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksService} from './tasks.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TasksService
  ],
  declarations: [TaskListComponent, TaskDetailsComponent]
})
export class TasksModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksService} from './tasks.service';
import { TaskAddComponent } from './task-add/task-add.component';
import { RouterModule } from '@angular/router';
import { TaskAddBtnComponent } from './task-add-btn/task-add-btn.component';
import { FormsModule } from '@angular/forms';
import { TasksFilter} from './tasksFilter.pipe';
import { TaskTileComponent } from './task-tile/task-tile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, HttpClientModule
  ],
  exports: [
    TaskListComponent
  ],
  providers: [
    TasksService
  ],
  declarations: [TaskListComponent, TaskDetailsComponent, TaskAddComponent, TaskAddBtnComponent, TasksFilter, TaskTileComponent]
})
export class TasksModule { }

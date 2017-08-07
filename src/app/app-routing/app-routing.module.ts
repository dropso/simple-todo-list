import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TaskDetailsComponent } from '../tasks/task-details/task-details.component';
import { TaskAddComponent } from '../tasks/task-add/task-add.component';
import { TaskAddBtnComponent } from '../tasks/task-add-btn/task-add-btn.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {
    path: 'tasks',
    component: TaskListComponent,
    children: [
      {path: '', component: TaskAddBtnComponent},
      {path: 'add', component: TaskAddComponent}
    ]
  },
  {path: 'tasks/:id', component: TaskDetailsComponent},
  {path: 'about', loadChildren: '../about/about.module#AboutModule'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from "../tasks/task-list/task-list.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { TaskDetailsComponent } from "../tasks/task-details/task-details.component";


const appRoutes: Routes = [
  {path:'', redirectTo:'/tasks', pathMatch:'full'},
  {path:'tasks', component: TaskListComponent},
  {path: 'tasks/:id', component: TaskDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
]

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

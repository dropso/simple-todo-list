import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserModule} from '@angular/platform-browser';

import {TasksModule} from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

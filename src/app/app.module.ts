import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserModule} from '@angular/platform-browser';

import {TasksModule} from './tasks/tasks.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodoListComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule,LayoutsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

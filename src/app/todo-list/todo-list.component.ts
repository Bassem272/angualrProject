import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  todos: string[] = [];
  newTodo: string = '';

  constructor() {
    console.log('TodoListComponent - constructor called.');
  }

  ngOnChanges() {
    console.log('TodoListComponent - ngOnChanges called.');
  }

  ngOnInit() {
    console.log('TodoListComponent - ngOnInit called.');
  }

  ngDoCheck() {
    console.log('TodoListComponent - ngDoCheck called.');
  }

  ngAfterContentInit() {
    console.log('TodoListComponent - ngAfterContentInit called.');
  }

  ngAfterContentChecked() {
    console.log('TodoListComponent - ngAfterContentChecked called.');
  }

  ngAfterViewInit() {
    console.log('TodoListComponent - ngAfterViewInit called.');
  }

  ngAfterViewChecked() {
    console.log('TodoListComponent - ngAfterViewChecked called.');
  }

  ngOnDestroy() {
    console.log('TodoListComponent - ngOnDestroy called.');
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

 <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">fornto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">user</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->

      <!-- </ul>

    </div>
  </div>

</nav> -->
<!-- <div>
  <h2>Todo List</h2>
  <input [(ngModel)]="newTodo" placeholder="Enter a new todo" (keyup.enter)="addTodo()" />
  <button (click)="addTodo()">Add Todo</button>

  <ul>
    <li *ngFor="let todo of todos; let i = index">
      {{ todo }}
      <button (click)="deleteTodo(i)">Delete</button>
    </li>
  </ul>
</div> -->
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anga';
}

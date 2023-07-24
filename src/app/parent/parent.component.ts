import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p>
 <app-child>
  <h1>hiiiiiii</h1>
 </app-child>
 <button routerLink="/parent/child">go to child</button>

  `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

}

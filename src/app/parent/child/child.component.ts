import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child works!</p>
 <button routerLink="/">go to parent home</button>
 <ng-content ></ng-content>


  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

}

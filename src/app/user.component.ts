import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" />
    <h2>Hello! {{ name }}</h2>
    <p>I'm a user component</p>
  `,
})
export class UserComponent {
  name = 'Adel';
  onUserInput(event) {
    this.name = event.target.value;
  }
}

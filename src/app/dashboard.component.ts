import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <p>Lorem ipsum dolar amet.</p>
    <input type="text" [(ngModel)]="loadState" />
    <p>Load state: {{ loadState }}</p>
    <button (click)="onClickHandler()">set finished</button>
  `,
})
export class DashboardComponent {
  loadState = 'loading';

  onClickHandler() {
    this.loadState = 'finished';
  }
}

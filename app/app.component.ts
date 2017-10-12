import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], // Contain a reference of our Sass file
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>`
})
export class AppComponent {}
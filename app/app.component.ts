import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], // Contain a reference of our Sass file
  template: `
    <div class="app">
      <!--<h1 [innerHTML]="title"></h1>
      <h1>{{ title + '!'}}</h1>
      <img [src]="logo"/>-->
      <!--<button (click)="handleClick(username.value)">
        Get Value
      </button>-->
      <!--<input 
        type="text" 
        [ngModel] = "name"
        (ngModelChange)="handleChange($event)">-->
      <!--<input type="text" #username/>-->

        <!--<input 
        type="text" 
        [(ngModel)] = "name">-->
      <input 
        type="text" 
        [value] = "name"
        (input)="handleChange($event.target.value)">

      <template [ngIf] ="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>
      <!--<div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>-->
    </div>
    `
})
export class AppComponent {
  title: string;
  name: string = '';
  logo: string = 'img/logo.svg';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;

  constructor() {
    this.title = 'Ultimate Angular';
  }

  /*handleClick(value: string) {
    console.log(value);
  }*/
  handleChange(value: string) {
    this.name = value;
    console.log(event);
  }
}
import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>

    <h2>{{hero2.name}} details!id={{hero2.id}}</h2>

    <div>
      <ul>
        <li *ngFor="let item of items">
          {{item.id}}:{{item.name}}
        </li>
      </ul>
    </div>
    `
})
export class AppComponent {

  hero2: Hero = {
    id: 2,
    name: "mytest2"
  };

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  items: Hero[] = [
    {
      id: 3,
      name: "name3"
    },
    {
      id: 4,
      name: "name4"
    },
    {
      id: 5,
      name: "name5"
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  allItems: {description: string}[] = [
  ];

  addItem(description: string) {
    this.allItems.unshift({
      description
    });
  }

  add10k(description: string) {
    for (let i = 0; i < 10000; i++) {
      this.allItems.unshift({description})
    }
  }

  get todos() {
    return this.allItems
  }
}

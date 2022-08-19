import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  allItems: { description: string }[] = [];

  addXItems(items: number, description: string) {
    for (let i = 0; i < items; i++) {
      this.allItems.unshift({ description });
    }
  }

  get todos() {
    return this.allItems;
  }
}

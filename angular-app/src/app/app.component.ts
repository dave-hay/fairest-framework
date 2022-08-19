import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  totalTime = '0 ms';
  totalItems = 0;

  allItems: { description: string; status: boolean }[] = [];

  addXItems(items: number, description: string) {
    let t0 = performance.now();
    for (let i = 0; i < items; i++) {
      this.allItems.unshift({ description, status: false });
    }
    let t1 = performance.now();
    let time = t1 - t0;
    this.totalTime = time < 1000 ? time.toFixed(3) + ' ms' : time / 1000 + ' s';
    this.totalItems = this.todos.length;
  }

  completeItem(todo: any) {
    todo.status = !todo.status;
  }

  removeTodos(todo: any) {
    this.allItems = this.allItems.filter((t) => t !== todo);
  }

  get todos() {
    return this.allItems;
  }
}

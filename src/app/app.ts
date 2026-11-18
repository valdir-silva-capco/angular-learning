import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Angular';
  value = 'World';

  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  sayHello() {
    alert(`Hello ${this.name}`);
  }

  newFruit = '';
  fruits = ['apple', 'banana', 'orange'];

  updateFruit(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newFruit = target.value;
  }

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit.trim());
      this.newFruit='';
    }
  }
}

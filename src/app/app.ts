import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { UserService } from './services/user';

@Component({
  imports: [RouterOutlet, UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  userService = inject(UserService);

  isLogged = false;

  toggleLogin() {
    this.isLogged = !this.isLogged;
  }

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

  selectedUser = '';
  handleSelectedUser(name: string) {
    this.selectedUser = name;
  }
}

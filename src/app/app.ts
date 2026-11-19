import { Component, inject, OnInit } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { UserService } from './services/user';

@Component({
  imports: [UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  userService = inject(UserService);

  ngOnInit() {
    console.log('AppComponent Mounted!')
  }

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

  newUser = '';
  updateUser(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newUser = target.value;
  }

  addUser() {
    if(this.newUser.trim()) {
      this.userService.addUser(this.newUser.trim());
      this.newUser = '';
    }
  }
}

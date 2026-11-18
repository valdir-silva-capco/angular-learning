import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  name=input('');
  selected = output<string>();
  selectUser() {
    this.selected.emit(this.name());
  }
}

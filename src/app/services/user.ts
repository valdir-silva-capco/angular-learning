import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

    addUser(name: string) {
        this.users.push(name);
    }
}

import { User } from '../types/User';

export class MyDatabaseClassic {
  private static instance?: MyDatabaseClassic;

  private constructor() {}

  private users: User[] = [];

  static getInstance(): MyDatabaseClassic {
    if (!MyDatabaseClassic.instance) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }

  setUser(user: User): void {
    this.users.push(user);
  }

  setUsers(users: User[]): void {
    users.forEach((user) => {
      this.users.push(user);
    });
  }

  getUsers(): User[] {
    return this.users;
  }
}

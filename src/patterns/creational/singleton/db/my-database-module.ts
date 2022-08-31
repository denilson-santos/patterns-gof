import { User } from '../types/User';

const users: User[] = [];

export const MyDatabaseModule = {
  setUser(user: User): void {
    users.push(user);
  },

  setUsers(users2: User[]): void {
    users2.forEach((user) => {
      users.push(user);
    });
  },

  getUsers(): User[] {
    return users;
  },
};

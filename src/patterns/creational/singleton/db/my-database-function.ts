import { User } from '../types/User';

export const MyDatabaseFunction = (() => {
  const users: User[] = [];

  return {
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
})();

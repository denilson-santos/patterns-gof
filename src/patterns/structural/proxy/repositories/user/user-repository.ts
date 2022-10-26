import { UserRepositoryInterface, UserType } from './user-repository-interface';

export class UserRepository implements UserRepositoryInterface {
  public list(): Promise<UserType[] | undefined> {
    return new Promise<UserType[] | undefined>((resolve) => {
      setTimeout(
        () =>
          resolve([
            {
              name: 'Denilson',
              email: 'denilson@gmail.com',
              age: 23,
              addresses: [
                {
                  street: 'Travessa Leopodino Lima',
                  neighborhood: 'Dr. Juracy',
                  number: 123,
                },
                {
                  street: 'Avenida Dr. Mourão Guimarões',
                  neighborhood: 'Centro',
                  number: 456,
                },
                {
                  street: 'Rua Padre Anchieta',
                  neighborhood: 'Novo Brumado',
                  number: 789,
                },
              ],
            },
            {
              name: 'Márcia',
              email: 'marcia@gmail.com',
              age: 24,
              addresses: [
                {
                  street: 'Rua Sarjento Antenor Santos',
                  neighborhood: 'Flores',
                  number: 587,
                },
              ],
            },
            {
              name: 'Joana',
              email: 'joana@gmail.com',
            },
          ]),
        2000
      );
    });
  }
}

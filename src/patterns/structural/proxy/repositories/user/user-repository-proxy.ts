import { UserRepositoryInterface, UserType } from './user-repository-interface';

export class UserRepositoryProxy implements UserRepositoryInterface {
  private userList?: UserType[];

  public constructor(private realUserRepository: UserRepositoryInterface) {}

  public async list(): Promise<UserType[] | undefined> {
    if (this.userList) {
      console.log('CONSULTANDO DADOS NO CACHE...');
    } else {
      console.log('CONSULTANDO DADOS NO BANCO...');
      this.userList = await this.realUserRepository.list();
    }

    return this.userList;
  }
}

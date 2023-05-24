import { ChatMediatorInterface } from '../interfaces/chat-mediator-interface';
import { UserInterface } from '../interfaces/user-interface';

export class ChatMediator implements ChatMediatorInterface {
  private users: UserInterface[] = [];

  public addUser(user: UserInterface): ChatMediator {
    this.users.push(user);

    return this;
  }

  public sendMessage(message: string, sender: UserInterface): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

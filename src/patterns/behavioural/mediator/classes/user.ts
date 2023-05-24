import { ChatMediatorInterface } from '../interfaces/chat-mediator-interface';
import { UserInterface } from '../interfaces/user-interface';

export class User implements UserInterface {
  public constructor(
    private name: string,
    private chatMediator: ChatMediatorInterface
  ) {}

  public sendMessage(message: string): void {
    console.log(`${this.name} sent message: ${message}`);
    this.chatMediator.sendMessage(message, this);
  }

  public receiveMessage(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

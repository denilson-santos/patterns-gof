import { UserInterface } from './user-interface';

export interface ChatMediatorInterface {
  sendMessage(message: string, sender: UserInterface): void;
}

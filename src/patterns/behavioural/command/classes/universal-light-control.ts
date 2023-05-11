import { LightCommandInterface } from '../interfaces/light-command-interface';

export class UniversalLightControl {
  private commands: { [key: string]: LightCommandInterface } = {};

  public addCommand(button: string, command: LightCommandInterface): void {
    this.commands[button] = command;
  }

  public executeCommands(...buttons: string[]): void {
    buttons.map((button) => this.commands[button].execute());
  }

  public undoCommands(...buttons: string[]): void {
    buttons.map((button) => this.commands[button].undo());
  }
}

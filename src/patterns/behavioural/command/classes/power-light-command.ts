import { LightCommandInterface } from '../interfaces/light-command-interface';
import { LightInterface } from '../interfaces/light-interface';

export class PowerLightCommand implements LightCommandInterface {
  constructor(private light: LightInterface) {}

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

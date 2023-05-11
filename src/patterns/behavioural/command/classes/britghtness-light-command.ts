import { LightCommandInterface } from '../interfaces/light-command-interface';
import { LightInterface } from '../interfaces/light-interface';

export class BrightnessLightCommand implements LightCommandInterface {
  public constructor(private light: LightInterface) {
    this.light = light;
  }

  public execute(): void {
    this.light.brightUp();
  }

  public undo(): void {
    this.light.brightDown();
  }
}

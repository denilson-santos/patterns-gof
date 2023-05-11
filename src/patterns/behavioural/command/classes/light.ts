import { LightInterface } from '../interfaces/light-interface';

export class Light implements LightInterface {
  private light = false;
  private brightness = 0;

  public on(): boolean {
    this.light = true;
    this.brightness = 100;
    console.log('Light is on');

    return this.light;
  }

  public off(): boolean {
    this.light = false;
    this.brightness = 0;
    console.log('Light is off');

    return this.light;
  }

  public brightUp(): number {
    if (this.light && this.brightness < 100) {
      this.brightness += 10;
    }

    console.log(`Light is bright ${this.brightness}%`);

    return this.brightness;
  }

  public brightDown(): number {
    if (this.light && this.brightness > 0) {
      this.brightness -= 10;
    }

    console.log(`Light is bright ${this.brightness}%`);

    return this.brightness;
  }
}

import { LightInterface } from '../interfaces/light-interface';

export class Light implements LightInterface {
  private light = false;
  private brightness = 0;

  public on(): void {
    this.light = true;
    this.brightness = 100;
    console.log('Light is on');
  }

  public off(): void {
    this.light = false;
    this.brightness = 0;
    console.log('Light is off');
  }

  public brightUp(): void {
    if (this.light && this.brightness < 100) {
      this.brightness += 10;
      console.log(`Light is bright ${this.brightness}%`);
    }
  }

  public brightDown(): void {
    if (this.light && this.brightness > 0) {
      this.brightness -= 10;
      console.log(`Light is bright ${this.brightness}%`);
    }
  }
}

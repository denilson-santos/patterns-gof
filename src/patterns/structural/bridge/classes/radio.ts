import { DeviceInterface } from '../interfaces/device-interface';

export class Radio implements DeviceInterface {
  private power = false;
  private volume = 0;
  private minVolume = 0;
  private maxVolume = 100;
  private channel = 1;

  public isEnabled(): boolean {
    return this.power;
  }

  public enable(): void {
    this.power = true;
  }

  public disable(): void {
    this.power = false;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(volume: number): void {
    if (volume >= this.minVolume && volume <= this.maxVolume) {
      this.volume = volume;
    }
  }

  public getChannel(): number {
    return this.channel;
  }

  public setChannel(channel: number): void {
    this.channel = channel;
  }
}

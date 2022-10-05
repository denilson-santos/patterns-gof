import { DeviceInterface } from '../interfaces/device-interface';

export class Remote {
  public constructor(protected readonly device: DeviceInterface) {}

  public togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
      console.log('Dispositivo desligado!');
    } else {
      this.device.enable();
      console.log('Dispositivo ligado!');
    }
  }

  public volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 1);
    console.log(`VOLUME: ${this.device.getVolume()}`);
  }

  public volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 1);
    console.log(`VOLUME: ${this.device.getVolume()}`);
  }

  public channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
    console.log(`CANAL: ${this.device.getChannel()}`);
  }

  public channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
    console.log(`CANAL: ${this.device.getChannel()}`);
  }
}

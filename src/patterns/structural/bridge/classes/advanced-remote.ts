import { Remote } from './remote';

export class AdvancedRemote extends Remote {
  private oldVolume: number;

  public mute(): void {
    this.oldVolume = this.device.getVolume();
    this.device.setVolume(0);
    console.log('Dispositivo mudo!');
  }

  public unmute(): void {
    this.device.setVolume(this.oldVolume);
    this.oldVolume = 0;
    console.log(`Dispositivo desmudo! VOLUME: ${this.device.getVolume()}`);
  }
}

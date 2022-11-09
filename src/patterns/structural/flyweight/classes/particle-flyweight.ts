import { ExtrinsincState } from '../types/extrinsinc-state-type';
import { IntrinsicStateType } from '../types/intrinsinc-state-type';
import { ParticleFlyweightInterface } from '../interfaces/particle-flyweight-interface';

export class ParticleFlyweight implements ParticleFlyweightInterface {
  public constructor(private readonly instrisincState: IntrinsicStateType) {}

  public draw(extrinsincState: ExtrinsincState): void {
    console.log('DRAWING PARTICLE...');

    const particle = {
      intrinsicState: {
        color: this.instrisincState.color,
        type: this.instrisincState.type,
      },
      extrinsicState: {
        coordinates: extrinsincState.coordinates,
        speed: extrinsincState.speed,
      },
    };

    console.log(particle);
  }
}

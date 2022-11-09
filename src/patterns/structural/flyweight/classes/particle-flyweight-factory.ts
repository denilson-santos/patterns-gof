import { IntrinsicStateType } from '../types/intrinsinc-state-type';
import { ParticleFlyweight } from './particle-flyweight';
import { ParticleFlyweightInterface } from '../interfaces/particle-flyweight-interface';

export class ParticleFlyweightFactory {
  private static particleFlyweights: {
    [id: string]: ParticleFlyweightInterface;
  } = {};

  public static make(
    intrinsicState: IntrinsicStateType
  ): ParticleFlyweightInterface {
    const id = ParticleFlyweightFactory.createId(intrinsicState);

    if (!ParticleFlyweightFactory.particleFlyweights[id]) {
      console.log('CREATING NEW PARTICLE FLYWEIGHT...');

      ParticleFlyweightFactory.particleFlyweights[id] = new ParticleFlyweight(
        intrinsicState
      );
    }

    return ParticleFlyweightFactory.particleFlyweights[id];
  }

  public static createId(intrinsicState: IntrinsicStateType): string {
    return Object.values(intrinsicState).join('_');
  }
}

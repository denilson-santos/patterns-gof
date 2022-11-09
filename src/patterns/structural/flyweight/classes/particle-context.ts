import { ExtrinsincState } from '../types/extrinsinc-state-type';
import { IntrinsicStateType } from '../types/intrinsinc-state-type';
import { ParticleFlyweightFactory } from './particle-flyweight-factory';
import { ParticleFlyweightInterface } from '../interfaces/particle-flyweight-interface';

export class ParticleContext {
  private flyweight: ParticleFlyweightInterface;

  public constructor(
    instrinsincState: IntrinsicStateType,
    private readonly extrinsincState: ExtrinsincState
  ) {
    this.flyweight = ParticleFlyweightFactory.make(instrinsincState);
  }

  public draw(): void {
    this.flyweight.draw(this.extrinsincState);
  }
}

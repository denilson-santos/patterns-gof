import { ExtrinsincState } from '../types/extrinsinc-state-type';

export interface ParticleFlyweightInterface {
  draw(extrinsincState: ExtrinsincState): void;
}

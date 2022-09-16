import { Car } from './car';
import { VehicleCreator } from './vehicle-creator';
import { VehicleInterface } from '../interfaces/vehicle-interface';

export class CarFactory extends VehicleCreator {
  create(carName: string): VehicleInterface {
    return new Car(carName);
  }
}

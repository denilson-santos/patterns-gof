import { Motorcycle } from './motorcycle';
import { VehicleCreator } from './vehicle-creator';
import { VehicleInterface } from '../interfaces/vehicle-interface';

export class MotorcycleFactory extends VehicleCreator {
  create(vehicleName: string): VehicleInterface {
    return new Motorcycle(vehicleName);
  }
}

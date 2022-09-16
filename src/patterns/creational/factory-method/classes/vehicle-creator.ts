import { VehicleInterface } from '../interfaces/vehicle-interface';

export abstract class VehicleCreator {
  // Factory method
  abstract create(vehicleName: string): VehicleInterface;
}

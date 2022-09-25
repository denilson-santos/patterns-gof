import { CustomerInterface } from '../../customer/interfaces/customer-interface';
import { VehicleInterface } from '../../vehicle/interfaces/vehicle-interface';

export interface CustomerVehicleFactoryInterface {
  createCustomer(name: string): CustomerInterface;
  createVehicle(name: string, customerName: string): VehicleInterface;
}

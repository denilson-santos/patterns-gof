import { CustomerInterface } from '../customer/interfaces/customer-interface';
import { CustomerVehicleFactoryInterface } from './interfaces/customer-vehicle-factory-interface';
import { IndividualCar } from '../vehicle/individual-car';
import { IndividualCustomer } from '../customer/individual-customer';
import { VehicleInterface } from '../vehicle/interfaces/vehicle-interface';

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactoryInterface
{
  createCustomer(name: string): CustomerInterface {
    return new IndividualCustomer(name);
  }

  createVehicle(name: string, customerName: string): VehicleInterface {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(name, customer);
  }
}

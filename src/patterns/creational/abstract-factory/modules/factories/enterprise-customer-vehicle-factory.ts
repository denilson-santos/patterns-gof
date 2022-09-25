import { CustomerInterface } from '../customer/interfaces/customer-interface';
import { CustomerVehicleFactoryInterface } from './interfaces/customer-vehicle-factory-interface';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { VehicleInterface } from '../vehicle/interfaces/vehicle-interface';

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactoryInterface
{
  createCustomer(name: string): CustomerInterface {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string, customerName: string): VehicleInterface {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(name, customer);
  }
}

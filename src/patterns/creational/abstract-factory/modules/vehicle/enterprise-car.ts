import { CustomerInterface } from '../customer/interfaces/customer-interface';
import { VehicleInterface } from './interfaces/vehicle-interface';

export class EnterpriseCar implements VehicleInterface {
  public constructor(
    public name: string,
    private customer: CustomerInterface
  ) {}

  public pickUp(): string {
    return `O carro ${this.name} está à caminho do cliente ${this.customer.name}. (ENTERPRISE)`;
  }
}

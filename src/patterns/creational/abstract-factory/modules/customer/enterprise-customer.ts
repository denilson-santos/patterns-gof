import { CustomerInterface } from './interfaces/customer-interface';

export class EnterpriseCustomer implements CustomerInterface {
  public constructor(public name: string) {
    this.name = `${name} (ENTERPRISE)`;
  }
}

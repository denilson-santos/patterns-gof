import { CustomerInterface } from './interfaces/customer-interface';

export class IndividualCustomer implements CustomerInterface {
  public constructor(public name: string) {
    this.name = `${name} (INDIVIDUAL)`;
  }
}

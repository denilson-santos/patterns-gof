import { PrototypeProtocol } from '../interfaces/prototype-protocol';

export class Address implements PrototypeProtocol {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

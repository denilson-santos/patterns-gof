import { Address } from './address';
import { PrototypeProtocol } from '../interfaces/prototype-protocol';

export class PersonPrototypeShallow implements PrototypeProtocol {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    return Object.create(this);
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

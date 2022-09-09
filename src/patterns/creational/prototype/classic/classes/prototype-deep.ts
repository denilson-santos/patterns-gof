import { Address } from './address';
import { PrototypeProtocol } from '../interfaces/prototype-protocol';

export class PersonPrototypeDeep implements PrototypeProtocol {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): PersonPrototypeDeep {
    const newObj = new PersonPrototypeDeep(this.name, this.age);

    newObj.addresses = this.addresses.map((address) => address.clone());

    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

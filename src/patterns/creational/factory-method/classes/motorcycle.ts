import { VehicleInterface } from '../interfaces/vehicle-interface';

export class Motorcycle implements VehicleInterface {
  constructor(private name: string) {}

  pickup(customerName: string): string {
    return `A moto ${this.name} está à caminho do cliente ${customerName}.`;
  }

  stop(): string {
    return `A moto ${this.name} parou.`;
  }
}

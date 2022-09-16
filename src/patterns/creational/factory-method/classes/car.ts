import { VehicleInterface } from '../interfaces/vehicle-interface';

export class Car implements VehicleInterface {
  constructor(private name: string) {}

  pickup(customerName: string): string {
    return `O carro ${this.name} está à caminho do cliente ${customerName}.`;
  }

  stop(): string {
    return `O carro ${this.name} parou.`;
  }
}

import { CarProtocol } from './car-protocol';

export interface CarBuilderProtocol {
  reset(): void;
  model(model: string): this;
  year(year: number): this;
  price(price: number): this;
  seats(seats: number): this;
  engine(engine: number): this;
  tripComputer(tripComputer: boolean): this;
  GPS(gps: boolean): this;
  build(): CarProtocol;
}

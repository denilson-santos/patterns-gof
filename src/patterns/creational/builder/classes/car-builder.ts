import { Car } from './car';
import { CarBuilderProtocol } from '../interfaces/car-builder-protocol';
import { CarProtocol } from '../interfaces/car-protocol';

export class CarBuilder implements CarBuilderProtocol {
  private car: CarProtocol;

  public constructor() {
    this.reset();
  }

  public reset(): this {
    this.car = new Car();

    return this;
  }

  public model(model: string): this {
    this.car.setModel(model);

    return this;
  }

  public year(year: number): this {
    this.car.setYear(year);

    return this;
  }

  public price(price: number): this {
    this.car.setPrice(price);

    return this;
  }

  public seats(seats: number): this {
    this.car.setSeats(seats);

    return this;
  }

  public engine(engine: number): this {
    this.car.setEngine(engine);

    return this;
  }

  public tripComputer(tripComputer: boolean): this {
    this.car.setTripComputer(tripComputer);

    return this;
  }

  public GPS(gps: boolean): this {
    this.car.setGPS(gps);

    return this;
  }

  public build(): CarProtocol {
    const { car } = this;

    this.reset();

    return car;
  }
}

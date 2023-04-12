import { CarBuilderProtocol } from '../interfaces/car-builder-protocol';

export class CarDirector {
  public buildFerrari(carBuilder: CarBuilderProtocol): void {
    carBuilder
      .model('Ferrari')
      .year(2020)
      .price(1000000)
      .seats(2)
      .engine(5.0)
      .tripComputer(true)
      .GPS(true);
  }
}

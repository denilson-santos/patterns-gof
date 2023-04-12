export interface CarProtocol {
  getModel(): string;
  setModel(model: string): void;
  getYear(): number;
  setYear(year: number): void;
  getPrice(): number;
  setPrice(price: number): void;
  getSeats(): number;
  setSeats(seats: number): void;
  getEngine(): number;
  setEngine(engine: number): void;
  isTripComputer(): boolean;
  setTripComputer(tripComputer: boolean): void;
  isGPS(): boolean;
  setGPS(GPS: boolean): void;
  show(): void;
}

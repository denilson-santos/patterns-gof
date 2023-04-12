export class Car {
  private model: string;
  private year: number;
  private price: number;
  private seats: number;
  private engine: number;
  private tripComputer: boolean;
  private GPS: boolean;

  public getModel(): string {
    return this.model;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public getYear(): number {
    return this.year;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getSeats(): number {
    return this.seats;
  }

  public setSeats(seats: number): void {
    this.seats = seats;
  }

  public getEngine(): number {
    return this.engine;
  }

  public setEngine(engine: number): void {
    this.engine = engine;
  }

  public isTripComputer(): boolean {
    return this.tripComputer;
  }

  public setTripComputer(tripComputer: boolean): void {
    this.tripComputer = tripComputer;
  }

  public isGPS(): boolean {
    return this.GPS;
  }

  public setGPS(GPS: boolean): void {
    this.GPS = GPS;
  }

  public show(): void {
    console.log(
      `MODELO: ${this.model} \nANO: ${this.year}\nPREÇO: R$ ${this.price} \nAcentos: ${this.seats} \nMotor: ${this.engine} \nComputador de Bordo: ${this.tripComputer} \nGPS: ${this.GPS}`
    );
  }
}

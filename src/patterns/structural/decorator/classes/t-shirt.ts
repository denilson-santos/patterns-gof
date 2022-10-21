import { ProductInterface } from '../interfaces/product-interface';

export class TShirt implements ProductInterface {
  public constructor(
    private name: string,
    private length: 'S' | 'M' | 'L' | 'XL' | 'XXL',
    private price: number
  ) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getLength(): string {
    return this.length;
  }
}

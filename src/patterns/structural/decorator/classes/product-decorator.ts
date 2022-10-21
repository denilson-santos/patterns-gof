import { ProductInterface } from '../interfaces/product-interface';

export class ProductDecorator implements ProductInterface {
  public constructor(protected product: ProductInterface) {}

  public getName(): string {
    return this.product.getName();
  }

  public getPrice(): number {
    return this.product.getPrice();
  }
}

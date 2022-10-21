import { ProductDecorator } from './product-decorator';
import { ProductInterface } from '../interfaces/product-interface';

export class StampDecorator extends ProductDecorator {
  public constructor(
    protected product: ProductInterface,
    private stampLenght: 'S' | 'M' | 'L',
    private stampPrice: number
  ) {
    super(product);
  }

  public getPrice(): number {
    return this.product.getPrice() + this.stampPrice;
  }

  public printStamp(): void {
    console.log(`PRINTED STAMP WITH LENGTH: ${this.stampLenght}`);
  }
}

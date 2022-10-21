import { ProductDecorator } from './product-decorator';
import { ProductInterface } from '../interfaces/product-interface';

export class TextDecorator extends ProductDecorator {
  private textPrice = 20;

  public constructor(
    protected product: ProductInterface,
    private text: string
  ) {
    super(product);
  }

  public getPrice(): number {
    return this.product.getPrice() + this.textPrice;
  }

  public printText(): void {
    console.log(`PRINTED TEXT: ${this.text}`);
  }
}

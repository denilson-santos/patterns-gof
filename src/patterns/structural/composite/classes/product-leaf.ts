import { ProductComponent } from './product-component';

export class ProductLeaf extends ProductComponent {
  public constructor(public name: string, public price: number) {
    super();
  }
}

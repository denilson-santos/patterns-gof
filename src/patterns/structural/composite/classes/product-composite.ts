import { ProductComponent } from './product-component';

export class ProductComposite extends ProductComponent {
  public add(...products: ProductComponent[]): void {
    products.forEach((product) => {
      this.setChildren(product);

      product.setParent(this);
    });
  }

  public remove(product: ProductComponent): void {
    const productIndex = this.getChildren().indexOf(product);

    this.getChildren().splice(productIndex, 1);
  }

  public getPrice(): number {
    return this.getChildren().reduce(
      (totalPrice, child) => totalPrice + child.getPrice(),
      0
    );
  }
}

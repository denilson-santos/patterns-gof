export abstract class ProductComponent {
  protected parent?: ProductComponent;
  protected price: number;

  public getPrice(): number {
    return this.price;
  }

  public getParent(): ProductComponent | undefined {
    return this.parent;
  }

  public setParent(parent: ProductComponent): void {
    this.parent = parent;
  }
}

export abstract class ProductComponent {
  protected parent?: ProductComponent;
  protected children: ProductComponent[] = [];
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

  public getChildren(): ProductComponent[] {
    return this.children;
  }

  public setChildren(children: ProductComponent): void {
    this.children.push(children);
  }
}

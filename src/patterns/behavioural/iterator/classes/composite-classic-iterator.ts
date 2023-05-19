import { CompositeClassicIteratorInterface } from '../interfaces/composite-classic-iterator-interface';

import { ProductComponent } from 'patterns/structural/composite/classes/product-component';

export class CompositeClassicIterator
  implements CompositeClassicIteratorInterface<ProductComponent>
{
  // Iteration order - depth(depth-first)
  private stack: ProductComponent[];

  public constructor(collection: ProductComponent) {
    this.stack = [collection];
  }

  public next(): ProductComponent | undefined {
    const node = this.stack.pop()!;

    this.stack.push(...node.getChildren().reverse());

    return node;
  }

  public hasNext(): boolean {
    return this.stack.length > 0;
  }
}

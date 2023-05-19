import { CompositeClassicCollectionInterface } from '../interfaces/composite-classic-collection-interface';
import { CompositeClassicIteratorInterface } from '../interfaces/composite-classic-iterator-interface';

import { CompositeClassicIterator } from './composite-classic-iterator';

import { ProductComponent } from 'patterns/structural/composite/classes/product-component';

export class CompositeClassicCollection
  implements CompositeClassicCollectionInterface<ProductComponent>
{
  public constructor(private collection: ProductComponent) {}

  public createCompositeIterator(): CompositeClassicIteratorInterface<ProductComponent> {
    return new CompositeClassicIterator(this.collection);
  }
}

import { CompositeClassicIteratorInterface } from './composite-classic-iterator-interface';

export interface CompositeClassicCollectionInterface<T> {
  createCompositeIterator(): CompositeClassicIteratorInterface<T>;
}

export interface CompositeClassicIteratorInterface<T> {
  next(): T | undefined;
  hasNext(): boolean;
}

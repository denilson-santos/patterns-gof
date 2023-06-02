export interface EventListenerInterface<T = unknown> {
  // Observer
  update(data: T): void;
}

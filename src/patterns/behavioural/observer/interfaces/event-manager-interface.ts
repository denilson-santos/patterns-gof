import { EventListenerInterface } from './event-listener-interface';

export interface EventManagerInterface<T = unknown> {
  // Base observable
  subscribe(eventType: string, listener: EventListenerInterface<T>): void;
  unsubscribe(eventType: string, listener: EventListenerInterface<T>): void;
  notify(eventType: string, data: T): void;
}

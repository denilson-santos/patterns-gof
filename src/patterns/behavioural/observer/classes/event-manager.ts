import { EventListenerInterface } from '../interfaces/event-listener-interface';
import { EventManagerInterface } from '../interfaces/event-manager-interface';
import { FileType } from '../types/file-type';

export class EventManager implements EventManagerInterface<FileType> {
  // Base observable
  private eventListeners: {
    [eventType: string]: EventListenerInterface<FileType>[];
  } = {};

  public subscribe(
    eventType: string,
    listener: EventListenerInterface<FileType>
  ): void {
    if (!this.eventListeners[eventType]) this.eventListeners[eventType] = [];
    this.eventListeners[eventType].push(listener);
  }

  public unsubscribe(
    eventType: string,
    listener: EventListenerInterface<FileType>
  ): void {
    this.eventListeners[eventType].splice(
      this.eventListeners[eventType].indexOf(listener),
      1
    );
  }

  public notify(eventType: string, data: FileType): void {
    if (
      !this.eventListeners ||
      (this.eventListeners && !this.eventListeners[eventType])
    ) {
      throw new Error('Not listener registered for event type!');
    }

    Object.keys(this.eventListeners).forEach((type) => {
      if (type === eventType) {
        this.eventListeners[eventType].forEach((listener) => {
          console.log(`O evento ${eventType} foi chamado!`);
          listener.update(data);
        });
      }
    });
  }
}

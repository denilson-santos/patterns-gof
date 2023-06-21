import { VisitorInterface } from './visitor-interface';

export interface DocumentInterface {
  accept(documentVisitor: VisitorInterface): void;
  getResult(): string;
}

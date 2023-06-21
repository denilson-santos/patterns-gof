import { DocumentInterface } from '../interfaces/document-interface';
import { VisitorInterface } from '../interfaces/visitor-interface';

export class TextDocument implements DocumentInterface {
  public constructor(private name: string, private content: string) {}

  public accept(documentVisitor: VisitorInterface): void {
    documentVisitor.visitTextDocument(this);
  }

  public getResult(): string {
    const message = `
      || TEXT DOCUMENT - ${this.name} ||\n
      "${this.content}"
    `;

    console.log(message);

    return message;
  }
}

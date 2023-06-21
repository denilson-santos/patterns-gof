import { DocumentInterface } from '../interfaces/document-interface';
import { VisitorInterface } from '../interfaces/visitor-interface';

export class SpreadsheetDocument implements DocumentInterface {
  public constructor(private name: string, private content: string) {}

  public accept(documentVisitor: VisitorInterface): void {
    documentVisitor.visitSpreadsheetDocument(this);
  }

  public getResult(): string {
    const message = `
      || SPREADSHEET DOCUMENT - ${this.name} ||\n
      "${this.content}"
    `;

    console.log(message);

    return message;
  }
}

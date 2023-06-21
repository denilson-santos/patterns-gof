import { SpreadsheetDocument } from './spreadsheet-document';
import { TextDocument } from './text-document';
import { VisitorInterface } from '../interfaces/visitor-interface';

export class TestVisitor implements VisitorInterface {
  public visitTextDocument(document: TextDocument): void {
    const content = `${document.getResult()}\n#VISITED BY TEXT TEST VISITOR#`;

    console.log(content);
  }

  public visitSpreadsheetDocument(document: SpreadsheetDocument): void {
    const content = `${document.getResult()}\n#VISITED BY TEXT TEST VISITOR#`;

    console.log(content);
  }
}

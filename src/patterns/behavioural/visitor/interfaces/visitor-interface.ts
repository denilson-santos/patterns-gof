import { SpreadsheetDocument } from '../classes/spreadsheet-document';
import { TextDocument } from '../classes/text-document';

export interface VisitorInterface {
  visitTextDocument(document: TextDocument): void;
  visitSpreadsheetDocument(document: SpreadsheetDocument): void;
}

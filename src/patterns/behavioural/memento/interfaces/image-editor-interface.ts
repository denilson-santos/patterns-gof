import { ImageEditorMementoInterface } from './image-editor-memento-interface';

export interface ImageEditorInterface {
  setPath(path: string): void;
  setFormat(format: string): void;
  saveState(): ImageEditorMementoInterface;
  convertTo(format: string): string;
}

import { ImageEditorInterface } from '../interfaces/image-editor-interface';
import { ImageEditorMemento } from './image-editor-memento';
import { ImageEditorMementoInterface } from '../interfaces/image-editor-memento-interface';

export class ImageEditor implements ImageEditorInterface {
  public constructor(private path: string, private format: string) {}

  public setPath(path: string): void {
    this.path = path;
  }

  public setFormat(format: string): void {
    this.format = format;
  }

  public saveState(): ImageEditorMementoInterface {
    return new ImageEditorMemento(this, this.path, this.format);
  }

  public convertTo(format: string): string {
    console.log(
      `Convertendo a image: "${this.path}" para o formato "${format}"`
    );

    this.path = `${this.path.split('.')[0]}.${format}`;
    this.format = format;

    console.log(`Imagem convertida: "${this.path}"`);

    return this.path;
  }
}

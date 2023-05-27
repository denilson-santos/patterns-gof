import { ImageEditorInterface } from '../interfaces/image-editor-interface';
import { ImageEditorMementoInterface } from '../interfaces/image-editor-memento-interface';

export class ImageEditorMemento implements ImageEditorMementoInterface {
  public constructor(
    private editor: ImageEditorInterface,
    private path: string,
    private format: string
  ) {}

  public restore(): void {
    console.log(
      `Restaurando estado. Imagem: "${this.path}", Formato: "${this.format}"`
    );

    this.editor.setPath(this.path);
    this.editor.setFormat(this.format);
  }
}

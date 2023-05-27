import { ImageEditorMementoInterface } from '../interfaces/image-editor-memento-interface';

export class ImageEditorHistory {
  private history: ImageEditorMementoInterface[] = [];

  public saveStateInHistory(state: ImageEditorMementoInterface): void {
    this.history.push(state);
  }

  public undo(): void {
    const oldState = this.history.pop();

    if (oldState) {
      oldState.restore();
    } else {
      console.log('Nenhum estado anterior salvo.');
    }
  }
}

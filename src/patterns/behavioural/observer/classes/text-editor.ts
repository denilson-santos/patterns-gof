import { EventManagerInterface } from '../interfaces/event-manager-interface';
import { FileType } from '../types/file-type';

export class TextEditor {
  private files: FileType[] = [];

  public constructor(private eventManager: EventManagerInterface<FileType>) {}

  public createFile(name: string, content: string): FileType {
    const file = {
      fileName: name,
      filePath: `/path/to/${name}`,
      fileType: name.slice(name.indexOf('.')),
      fileContent: content,
    };

    this.files.push(file);
    this.eventManager.notify('CREATING_FILE', file);

    return file;
  }

  public editFile(name: string, content: string): FileType {
    let editedFile = null;

    this.files.forEach((file) => {
      if (file.fileName === name) {
        file.fileName = name;
        file.filePath = `/path/to/${name}`;
        file.fileType = name.slice(name.indexOf('.'));
        file.fileContent = content;

        editedFile = file;
      }
    });

    if (!editedFile) throw new Error(`File not exists: ${name}`);

    this.eventManager.notify('UPDATING_FILE', editedFile);

    return editedFile;
  }

  public deleteFile(name: string): void {
    this.files.every((file, index) => {
      if (file.fileName === name) {
        this.files.splice(index, 1);
        this.eventManager.notify('DELETING_FILE', file);
      } else if (index === this.files.length - 1) {
        throw new Error(`File not exists: ${name}`);
      }

      return true;
    });
  }
}

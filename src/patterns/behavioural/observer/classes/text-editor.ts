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
    const index = this.files.findIndex((file) => file.fileName === name);

    if (index === -1) {
      throw new Error(`File not exists: ${name}`);
    }

    const editedFile = { ...this.files[index] };

    editedFile.fileName = name;
    editedFile.filePath = `/path/to/${name}`;
    editedFile.fileType = name.slice(name.indexOf('.'));
    editedFile.fileContent = content;

    this.eventManager.notify('UPDATING_FILE', editedFile);

    return editedFile;
  }

  public deleteFile(name: string): void {
    const index = this.files.findIndex((file) => file.fileName === name);

    if (index === -1) {
      throw new Error(`File not exists: ${name}`);
    }

    const deletedFile = this.files[index];

    this.files.splice(index, 1);
    this.eventManager.notify('DELETING_FILE', deletedFile);
  }
}

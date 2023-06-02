import { EventListenerInterface } from '../interfaces/event-listener-interface';
import { FileType } from '../types/file-type';

export class LogEventListener implements EventListenerInterface<FileType> {
  // Observer
  public update(data: FileType): void {
    console.log(
      `A classe Log ouviu o evento e trouxe os dados: \n\n#FileName - "${data.fileName}"\n#FilePath - "${data.filePath}"\n#FileType - "${data.fileType}"\n#FileContent - "${data.fileContent}"\n\n`
    );
  }
}

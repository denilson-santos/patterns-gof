import fs from "fs/promises";
import path from 'path';

export type OutputData = {
  name: string;
  email: string;
  age: number;
}

export abstract class DataMiner {
  protected fileContent: string;
  protected fileOutput: OutputData[];

  public async mine(pathFile: string): Promise<OutputData[]> {
    await this.openFile(pathFile);
    this.extractData();
    
    return this.clearData();
  }

  protected async openFile(pathFile: string): Promise<void> {
    try {
      console.log(`Opening file "${pathFile}"`);

      const file = await fs.readFile(path.join(__dirname, '..', 'storage', pathFile), 'utf8');

      this.fileContent = file.toString();
    } catch (error) {
      console.error(`Error on open file: "${pathFile}"`, error);
    }
  }

  protected abstract extractData(): OutputData[];
  
  protected abstract clearData(): OutputData[];

  public getData(): OutputData[] {
    console.log(`Get data with "Base MINER"`);

    return this.fileOutput;
  }
}
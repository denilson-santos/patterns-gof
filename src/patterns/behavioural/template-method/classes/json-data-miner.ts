import { DataMiner, OutputData } from "./data-miner";

export class JsonDataMiner extends DataMiner {
  protected extractData(): OutputData[] {
    this.fileOutput = JSON.parse(this.fileContent);

    console.log(`Extract data with "JSON MINER"`, this.fileOutput);

    return this.fileOutput;
  }
  
  protected clearData(): OutputData[] {
    this.fileOutput = this.fileOutput.map(item => ({
        name: item.name.replaceAll(' ', ''),
        email: item.email.trim(),
        age: item.age
      }));

    console.log(`Clear data with "JSON MINER"`, this.fileOutput);

    return this.fileOutput;
  }
}
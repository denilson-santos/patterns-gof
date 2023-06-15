import { DataMiner, OutputData } from "./data-miner";

export class CsvDataMiner extends DataMiner {
  protected extractData(): OutputData[] {
    this.fileOutput = this.fileContent.split('\n').slice(1).map(line => {
      const [name, email, age] = line.split(',');

      return {
        name: name.trim(),
        email: email.trim(),
        age: parseInt(age, 10)
      }
    });

    console.log(`Extract data with "CSV MINER"`, this.fileOutput);

    return this.fileOutput;
  }
  
  protected clearData(): OutputData[] {
    this.fileOutput = this.fileOutput.map(item => ({
        name: item.name.replaceAll(' ', ''),
        email: item.email.trim(),
        age: item.age
      }));

    console.log(`Clear data with "CSV MINER"`, this.fileOutput);

    return this.fileOutput;
  }
}
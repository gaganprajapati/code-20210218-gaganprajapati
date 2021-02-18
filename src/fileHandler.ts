const csv = require("csv-parser");
const fs = require("fs");
const request = require("request-promise-native");
const chalk = require("chalk");

readCsv();
export function readCsv() {
  let count: number = 0;
  let fileSize:number = 0;
  const csvURL: string =
    "https://srv-store2.gofile.io/download/UqaX5f/jj.csv";

  request
    .get(csvURL)
    .on("data", (data: any) => {
      fileSize += data.length;
    })
    .pipe(csv())
    .on("headers", (headers: Array<string>) => {
      console.log(
        chalk.white.bgBlue.bold("Column Names:"),
        headers[0].replace(/\;/g, ", ")
      );
    })
    .on("data", () => count++)
    .on("end", () => {
      console.log(
        chalk.white.bgBlue.bold("File size:"),
        fileSize,
        "bytes"
      );
      console.log(chalk.white.bgBlue.bold("No. of rows:"), count);
      return 'Done';
    });
}

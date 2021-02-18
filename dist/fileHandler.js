"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsv = void 0;
var csv = require("csv-parser");
var fs = require("fs");
var request = require("request-promise-native");
var chalk = require("chalk");
readCsv();
function readCsv() {
    var count = 0;
    var fileSize = 0;
    var csvURL = "https://srv-store2.gofile.io/download/UqaX5f/jj.csv";
    request
        .get(csvURL)
        .on("data", function (data) {
        fileSize += data.length;
    })
        .pipe(csv())
        .on("headers", function (headers) {
        console.log(chalk.white.bgBlue.bold("Column Names:"), headers[0].replace(/\;/g, ", "));
    })
        .on("data", function () { return count++; })
        .on("end", function () {
        console.log(chalk.white.bgBlue.bold("File size:"), fileSize, "bytes");
        console.log(chalk.white.bgBlue.bold("No. of rows:"), count);
        return 'Done';
    });
}
exports.readCsv = readCsv;

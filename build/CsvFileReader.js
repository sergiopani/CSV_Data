"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        //One big String with all the different matches
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8', //What type of content we expect to be in the file
        })
            .split('\n') //Split all the csv in array of string, and every row represents a position in array
            .map((row) => {
            return row.split(',');
        }).map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
        //Three
    }
}
exports.CsvFileReader = CsvFileReader;

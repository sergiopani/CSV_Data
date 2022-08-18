"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
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
        }).map(this.mapRow);
        //Three
    }
}
exports.CsvFileReader = CsvFileReader;

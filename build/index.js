"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
//Create an object that satisfies the data reader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something stisfyng
//the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
const reader = matchReader.matches;
const dateOfFirstMatch = reader[0][1];
console.log(dateOfFirstMatch);
let manUnitedWins = 0;
for (let match of reader) {
    //Represents all of diferents rows
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
//Report
console.log(`Man United won ${manUnitedWins} games!`);

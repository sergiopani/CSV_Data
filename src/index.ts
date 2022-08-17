import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
//The data propiety in this object has the reader
const reader = new CsvFileReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][1];
console.log(dateOfFirstMatch)
let manUnitedWins = 0;

for(let match of reader.data){
    //Represents all of diferents rows
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}


//Report
console.log(`Man United won ${manUnitedWins} games!`)







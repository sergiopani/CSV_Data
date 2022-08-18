import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

//Create an object that satisfies the data reader interface
const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something stisfyng
//the DataReader interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
//matchReader.matches
const reader = matchReader.matches;

const dateOfFirstMatch = reader[0][1];
console.log(dateOfFirstMatch);
let manUnitedWins = 0;

for(let match of reader){
    //Represents all of diferents rows
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}


//Report
console.log(`Man United won ${manUnitedWins} games!`)







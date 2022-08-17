import fs from 'fs'
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
//Tuple
type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];


export class CsvFileReader { 
    data:MatchData[] = [];

    constructor(public filename:string){}    

    read():void{
        //One big String with all the different matches
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8',//What type of content we expect to be in the file
        })
        .split('\n')//Split all the csv in array of string, and every row represents a position in array
        .map(
            (row:string):string[] => {
                return row.split(',')
        }).map((row:string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,//This index is 'H' 'A' 'D'
                row[6] 
            ];
        })

        //Three

    }

}
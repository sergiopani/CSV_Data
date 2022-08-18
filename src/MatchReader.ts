import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData"
interface DataReader{
    read(): void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData [] = [];

    constructor(public reader: DataReader){}

    /* .map((row:string[]): MatchData => {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,//This index is 'H' 'A' 'D'
            row[6] 
        ];
    }) */

    load(): void {
        //Get the csv file and produce the 2 dimensional array of string
        this.reader.read();
        this.matches = this.reader.data.map((row:string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,//This index is 'H' 'A' 'D'
                row[6] 
            ];
        });
    }
}
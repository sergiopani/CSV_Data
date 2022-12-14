import fs from 'fs'


/*STANDALONE CLASS*/ 
export class CsvFileReader { 
    data:string[][] = [];

    constructor(public filename:string){}    

    read(): void{
        //One big String with all the different matches
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8',//What type of content we expect to be in the file
        })
        .split('\n')//Split all the csv in array of string, and every row represents a position in array
        .map(
            (row:string):string[] => {
                return row.split(',')
        })

        //Three

    }

}
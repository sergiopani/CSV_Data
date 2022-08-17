import fs from 'fs';

//One big String with all the different matches
const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8',//What type of content we expect to be in the file
})
.split('\n')//Split all the csv in array of string, and every row represents a position in array
.map((row:string):string[] => {return row.split(',')});


let manUnitedWins = 0;

for(let match of matches){
    //Represents all of diferents rows
    if(match[1] === 'Man United' && match[5] === 'H'){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[5] === 'A'){
        manUnitedWins++;
    }
}


//Report
console.log(`Man United won ${manUnitedWins} games!`)







// FILE SYSTEM + READ LINE MODULES
const fs = require("fs");

//This function parses the csv file and extracts the string column 
//of the csv
export const getCSVFileParsed = async (searchTerm: string) => {
    try {
        // (B) READ CSV INTO STRING
        var data = await fs.readFileSync("industry_sic.csv", "utf8");

        // (C) STRING TO ARRAY
        data = data.split("\r\n"); // SPLIT ROWS

        for (let i in data) {
            if (data[i].indexOf('"') > -1) { //checks for double quotes
                data[i] = data[i].slice(data[i].indexOf('"'))  //removes the double quotes in the string
            }
            data[i] = data[i].replace(/[0-9]/g, ''); //removes the numbers in the string
            data[i] = data[i].replace(/"/g, ""); //removes the foward slash

            if (data[i].indexOf(',') == 0) {
                data[i] = data[i].replace(",", ""); //removes the comma that occurs at position one
            }
        }

        data.shift(); // removes the first element of the array as this is not needed
        data = matches(data, searchTerm);


        if (data.length > 20)//check if the data's length is greater than 20
        {
            data = data.slice(0, 20)//returns only twenty objects in the array
        }

        return data; //return data to the controller

    } catch (error) {
        throw error;
    }
}

//This funtion searches to find if the array contains the search term
const matches = (arr: string[], searchTerm: string) => {
    //searches for the string ignoring case
    return arr.filter((sentence: string) => sentence.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
}
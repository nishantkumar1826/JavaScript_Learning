//JSON = (JavaScript Objecct Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} Or [value1, value2, value3]

//          JSON.stringify() = converts a JS object to a JSON string.
//          JSON.parse() = converts a JSON string to a JS object


const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names);// it need to have a prior json file 
// ending of json files are .json

console.log(names);


// fethch()
// explaining using a 
fetch("person.json")
    .then(response)
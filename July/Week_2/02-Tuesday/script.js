import * as fs from 'fs';

import bubbleSort from "./bubbleSort.js";
import insertionSort from "./insertionSort.js";
import selectionSort from "./selectionSort.js";
//import quicksort from "./quickSort.js";

/* With require
const fs = require ('fs');
const { bubbleSort } = require("./bubbleSort.js");
const { insertionSort } = require("./insertionSort.js");
const { selectionSort } = require("./selectionSort.js");
const { quicksort } = require("./quickSort.js");
*/

const fileName = process.argv[2];


const data = fs.readFileSync(fileName, 'utf8');
const newData = data.split(" ");
const finalData = newData.map((data) => {
    return parseInt(data);
});

console.log(bubbleSort(finalData));
console.log(insertionSort(finalData, finalData.length));
console.log(selectionSort(finalData, finalData.length));
//console.log(quicksort(finalData));

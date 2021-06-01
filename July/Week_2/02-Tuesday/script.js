const fs = require('fs');
const bubble = require("./bubbleSort.js");






/*
import QuickSort from "./quickSort.js";
import SelectionSort from "./selectionSort.js";
import InsertionSort from "./insertionSort.js";
*/

const data = fs.readFileSync('list.txt', 'utf8');

console.log(bubble.bubbleSort(data));

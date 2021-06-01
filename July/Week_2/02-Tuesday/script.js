const fs = require('fs');
const bubbleSort = require("./bubbleSort.js");
const insertionSort = require("./insertionSort.js");
const selectionSort = require("./selectionSort.js");
const quickSort = require("./selectionSort.js");


const data = fs.readFileSync('list.txt', 'utf8');

console.log(bubble.bubbleSort(data));

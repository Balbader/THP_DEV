const fs = require('fs');

const { bubbleSort } = require("./bubbleSort.js");
const { insertionSort } = require("./insertionSort.js");
const { selectionSort } = require("./selectionSort.js");
const { quicksort } = require("./quickSort.js");

const data = fs.readFileSync('list.txt', 'utf8');

let arr = [48, -2, 6, 12, 0, -4];
console.log(bubbleSort(arr));
console.log(insertionSort(arr, 6));
console.log(selectionSort(arr, 6));
console.log(quicksort(arr));

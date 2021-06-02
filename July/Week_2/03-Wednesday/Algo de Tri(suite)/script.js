import * as fs from 'fs';
import timSort from './timSort.js';
import mergeSort from './mergeSort.js';
import cocktailSort from './cocktailSort.js';

const fileName = process.argv[2];

const arr = fs.readFileSync(fileName, 'utf8');
const newArr = arr.split(" ");
const finalArr = newArr.map((data) => {
    return parseInt(data);
});

console.log(mergeSort(finalArr, 0, finalArr.length));
console.log(timSort(finalArr, finalArr.length));
console.log(cocktailSort(finalArr));

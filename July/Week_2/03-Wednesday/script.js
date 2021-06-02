import * as fs from 'fs';
import timSort from './timSort.js';
import mergeSort from './mergeSort.js';

const arr = [-2, 7, 15, -14, 0, 15, 0,
           7, -7, -4, -13, 5, 8, -14, 12];


console.log(mergeSort(arr, 0, arr.length));
console.log(timSort(arr, arr.length));

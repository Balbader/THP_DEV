import insertionSort from './insertionSort.js';
import mergeSort from './mergeSort.js';

//MIN_RUN = 32

const arr = [-2, 7, 15, -14, 0, 15, 0, 7, -7, -4, -13, 5, 8, -14, 12];
const length = arr.length;
console.log("insertionSort:");
console.log(insertionSort(arr, length));
console.log("mergeSort:");
console.log(mergeSort(arr, 0, length -1));

import * as fs from 'fs';
import BubbleSort from "./bubbleSort.js";
import quickSort from "./quickSort.js";
import selectionSort from "./selectionSort.js";
import insertionSort from "./insertionSort.js";

fs.readFile('list.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err.message);
        return ;
    }
    console.log(data);
});

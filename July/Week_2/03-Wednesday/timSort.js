/*
import insertionSort from './insertionSort.js';
import mergeSort from './mergeSort.js';
*/

const MIN_RUN = 64

const insertionSort = (arr, l, r) => {
    for (let i = l + 1; i <= r; i++) {
        let temp = arr[i];
        let j = i -1;
        while (j >= l && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

const merge = (arr, l, m, r) => {

    const len1 = m - l + 1;
    const len2 = r - m;

    // Create temp arrays
    const L = new Array(len1);
    const R = new Array(len2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < len1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < len2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

    while (i < len1 && j < len2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
}

const timSort = (arr, n) => {

    let count = 0
    /* Sort individual sub-arrays of size MIN_RUN */
    for (let i = 0; i < n; i += MIN_RUN) {
        insertionSort(arr, i, Math.min((i + MIN_RUN - 1), (n - 1)));
        count++;
    }

    /* Start merging greater than size MIN_RUN */
    for (let size = MIN_RUN; size < n; size *= 2) {

        /* Pick starting point of left sub-arr */
        for (let left = 0; left < n; left += 2 * size) {

            /* Find end point of left sub-arr */
            /* Middle + 1 becomes the starting point of the right sub-arr*/
            const middle = left + size - 1;
            const right = Math.min((left + 2 * size - 1), (n - 1));

            /* Merge sub-arrays starting with arr[left...middle]
             * followed by arr[middle + 1 ... right] */
            if (middle < right) {
                merge(arr, left, middle, right);
            }
        }
        count++;
    }
    return (`Tim Sort: ${count} comparaisons - ${arr}`);
}


const arrTest = [-2, 7, 15, -14, 0, 15, 0, 7, -7, -4, -13, 5, 8, -14, 12];
console.log("timSort:");
console.log(timSort(arrTest, arrTest.length));

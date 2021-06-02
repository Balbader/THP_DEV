// l = left of arr
// m = middle of arr
// r = right of arr
const merge = (arr, l, m, r) => {

    // divide the original array in 2 parts: left array and right array
    let len1 = m - 1 + 1;
    let len2 = r - m;
    const left = [];
    const right = [];
    for (let i = 0; i < len1; i++) {
        left[i] = arr[1 + i];
    }
    for (let j = 0; j < len2; j++) {
        right[i ] = arr[m + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = 1;

    // After comparing, we merge the 2 arrays in one sub array
    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = arr[i];
            j++;
        }
        k++;
    }

    // Copy remainig elements of left array, if any
    while (i < len1) {
        arr[k] = left[i];
        k++;
        i++;
    }

    // Copy remainig elements of left array, if any
    while (j < len2) {
        arr[k] = right[j];
        k++;
        j++;
    }
}

/* left = left index of the sub-arr of the array to be sorted
 * right = right index of the sub-arr of the array to be sorted */
const mergeSort = (arr, left, right) => {
    if (left < right) {
        const middle = left + (right - 1) / 2;
        mergeSort(arr, left, middle);
        mergeSort(arr, middle + 1, right);
        merge(arr, left, middle, right);
    }
}



const arr = [-2, 7, 15, -14, 0, 15, 0, 7, -7, -4, -13, 5, 8, -14, 12];
console.log(mergeSort(arr, 0, arr.length));






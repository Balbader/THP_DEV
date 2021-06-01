const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const selectionSort = (array) => {
    const arr = Array.from(array); // avoid side effects
    const len = arr.length;
    let min;

    // remove boundary of unsorten subarray one by one
    for (let i = 0; i < len - 1; i++) {

        // find the smallest element in the unsorted array
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap the smallest element with the first element of the array
        swap(arr, i, min);
    }
    return arr;
}

module.exports = {
    selectionSort,
}

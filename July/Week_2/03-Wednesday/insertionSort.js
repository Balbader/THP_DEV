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
export default insertionSort;

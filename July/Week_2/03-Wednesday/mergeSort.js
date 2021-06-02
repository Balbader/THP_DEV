// l = left of arr
// m = middle of arr
// r = right of arr
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

    // Copy the remaining elements of
    // L[], if there are any
    while (i < len1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < len2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    const m = l + parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
    return arr;
}
export default mergeSort;

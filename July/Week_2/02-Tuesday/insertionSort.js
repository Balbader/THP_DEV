function insertionSort(arr, n) 
{
    let key;
    let j;

    for (let i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

/*
let arr = [12, 11, 13, 5, 6 ];
let n = arr.length;

console.log("arr berfore: ", arr);
insertionSort(arr, n);
console.log("arr after: ", arr);
*/

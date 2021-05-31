const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const bubbleSort = ( arr, n) => {
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr,j,j+1);

            }
        }

    }
}

/*
// Driver program to test above functions
const arr = [64, 34, 25, 12, 22, 11, 90];
const n = 7;
console.log("UnSorted array:");
console.log(arr);

bubbleSort(arr, n);
console.log(arr);
*/

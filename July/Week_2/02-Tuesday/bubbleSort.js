const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

const bubbleSort = (arr) => {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n-1; i++)
    {
        for (let j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr,j,j+1);

            }
            count++;
        }
    }
    return (`Tri à bulle: ${count} comparaisons - ${arr}`);
}

export default bubbleSort;

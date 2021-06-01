const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const bubbleSort = (arr, n) => {
    let count = 0;

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

module.exports = {
    bubbleSort,
}




















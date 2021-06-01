const insertionSort = (arr, n) => {
    let key;
    let j;
    let count = 0;

    for (let i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        count++;
    }
    return (`Tri par insertion: ${count} comparaisons - ${arr}`);
}

module.exports = {
    insertionSort,
}

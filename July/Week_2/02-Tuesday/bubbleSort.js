export default class BubbleSort {

    swap(arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    bubbleSort( arr, n) {
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
}

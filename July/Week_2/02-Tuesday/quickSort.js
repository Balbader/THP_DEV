const quicksort = (array) => {

    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = []; 
    var right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] > pivot ? right.push(array[i]) : left.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

const computeFactorialRec = (n) => {
    let fact;

    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    }

    fact = n * computeFactorialRec(n - 1);
    return fact;
}

console.log("computeFactorialRec(5): ", computeFactorialRec(5));

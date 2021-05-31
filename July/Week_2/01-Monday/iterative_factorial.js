const computeFactorialIt = (n) => {
    let x = 1;
    let fact = 1;

    if (x < 0) {
        return 0;
    } else if (x === 0) {
        return 1;
    }

    for (let i = x; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("computeFactorialIt(5): ", computeFactorialIt(5));

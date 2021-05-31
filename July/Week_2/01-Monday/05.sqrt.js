const computeSquarRoot = (n) => {
    const err = 0.00001;
    let sq = n;

    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }

    while ((sq - n / sq) > err) {
        sq = (sq + n / sq) / 2;
    }

    return sq;
}

console.log("Math.floor(computeSquarRoot(5)): ", Math.floor(computeSquarRoot(5)));

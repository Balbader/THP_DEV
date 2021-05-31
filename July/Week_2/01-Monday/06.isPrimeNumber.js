const isPrimeNumber = (n) => {
    let i = 2;

    while (i <= n / 2) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }

    if (n === 1 || n === 0) {
        return false;
    } else {
        return true;
    }
}

console.log("isPrimeNumber(5): ", isPrimeNumber(5));
console.log("isPrimeNumber(55): ", isPrimeNumber(55));

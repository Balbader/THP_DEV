// check if n is prime
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

// return smallest prime number >= n
const findSupPrime = (n) => {
    let x = n + 1;

    if (isPrimeNumber(x) === true) {
        return x;
    }
    if (isPrimeNumber(x) === false) {
        findSupPrime(x);
        while (isPrimeNumber(x) === false) {
            if (isPrimeNumber(x) === true) {
                return x;
            }
            x++;
        }
    }
}

console.log("findSupPrime(5): ", findSupPrime(5)); // output => 7
console.log("findSupPrime(1): ", findSupPrime(1)); // output => 2
console.log("findSupPrime(52): ", findSupPrime(53)); // output => 59
console.log("findSupPrime(71): ", findSupPrime(71)); // output => 73

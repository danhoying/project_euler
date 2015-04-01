// Solution to Project Euler Problem 3. Calculates the largest prime factor 
// of a number (default: 600851475143)

function largestPrime(number) {
    var number = number;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            number /= i;
        }
    }
    return number;
}

console.log(largestPrime(600851475143));

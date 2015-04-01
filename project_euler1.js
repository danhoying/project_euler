// Solution to Project Euler Problem 1. Calculates the sum of all multiples
// of 3 or 5 below a limit (default: 1000)

function sumMultiples(limit) {
    var sum = 0;
    for (var i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumMultiples(1000));

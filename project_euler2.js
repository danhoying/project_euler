// Solution to Project Euler Problem 2. Calculates the even-valued terms in 
// the Fibonacci sequence below a limit (default: 4000000)

function sumFibonacci(limit) {
    var sum = 0;
    var evenSum = 0;
    var term1 = 0; 
    var term2 = 0;
    for (var i = 1; i < limit; i = sum) {
        term1 = term2
        term2 = i;
        sum = term1 + term2;
        if (sum % 2 === 0) {
            evenSum += sum;
        }
    }
    return evenSum;
}

console.log(sumFibonacci(4000000));
        
        
        

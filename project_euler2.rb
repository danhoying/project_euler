# Solution to Project Euler Problem 2. Calculates the even-valued terms in 
# the Fibonacci sequence below a limit (default: 4000000)

def sum_fibonacci(limit) 
    sum = 0
    even_sum = 0
    term1 = 0
    term2 = 0
    i = 1
    while i < limit
        term1 = term2
        term2 = i
        sum = term1 + term2
        i = sum
        if sum % 2 == 0
            even_sum += sum
        end
    end
    return even_sum
end

puts sum_fibonacci(4000000)
        
        
        

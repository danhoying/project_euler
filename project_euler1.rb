# Solution to Project Euler Problem 1. Calculates the sum of all multiples
# of 3 or 5 below a limit (default: 1000)

def sum_multiples(limit) 
    sum = 0
    for i in 0...limit
        if i % 3 == 0 || i % 5 == 0
            sum += i
        end
    end
    return sum
end

puts sum_multiples(1000)

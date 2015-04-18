# Solution to Project Euler Problem 3. Calculates the largest prime factor 
# of a number (default: 600851475143)

def largest_prime(number) 
    number = number
    i = 2
    while i < number
        if number % i == 0
            number /= i
        end
        i += 1
    end
    return number
end

puts largest_prime(600851475143)

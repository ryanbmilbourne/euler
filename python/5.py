#!/usr/bin/env python 

'''
Problem
=======

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 
without any remainder.  What is the smallest positive number that is evenly divisible
by all of the numbers from 1 to 20?

Latest Run Stats
====== === =====

'''
from math import ceil
from math import sqrt

def primeSieve(num):
    noprimes = {j for i in range(2, int(ceil(sqrt(num)))) for j in range(i*2, num, i)} 
    return {i for i in range(2, num) if i not in noprimes}

def anyDivisible(nums, divisor):
    for i in nums:
        if i%divisor == 0:
            return True
    return False

limit = 20 #upper limit for divisors

divisors = range(2,limit+1)
primes = primeSieve(max(divisors))

primeFactors = []

# Use a LCM table to determine the prime factors that make up the solution
for prime in primes:
    if divisors == []:
        break
    while True:
        divisible = anyDivisible(divisors, prime)
        if not divisible:
            break
        divisors = [i if i% prime != 0 else i/prime for i in divisors]
        divisors = [i for i in divisors if i > 1]
        primeFactors.append(prime)

answer = reduce(lambda primeFactor, total: primeFactor*total, primeFactors)
print answer #should be only print statement


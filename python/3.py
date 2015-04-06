#!/usr/bin/env python 

'''
Problem
=======
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Latest Run Stats
====== === =====

'''

from math import sqrt
from math import ceil

startingValue = 600851475143
#startingValue = 13195

def primeSieve(num):
    noprimes = {j for i in range(2, int(ceil(sqrt(num)))) for j in range(i*2, num, i)}
    return {i for i in range(2, num) if i not in noprimes}
    
primes = primeSieve(int(ceil(sqrt(startingValue))))
factors = {i for i in primes if not startingValue % i}
print max(factors)

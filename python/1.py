#!/usr/bin/env python 

'''
Problem
=======
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

Latest Run Stats
====== === =====
real    0m0.028s
user    0m0.016s
sys     0m0.009s
'''

# Fill array with 3..99
sieve = range(3,1000)
# Reduce on the set of every third and fifth value from the sieve
answer = reduce(lambda x,y: x+y, set(sieve[0::3]+sieve[2::5]))

print answer

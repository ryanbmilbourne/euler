#!/usr/bin/env python 

'''
Problem
=======
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

Latest Run Stats
====== === =====
real    0m0.029s
user    0m0.016s
sys     0m0.010s

'''

cap = 4000000

'''
The below function is INCREDIBLY inefficient in python.
Whereas I can code a simple recursive function like this in Javascript and have it complete in 0.4s,
this takes 14+ seconds to calculate every third term up under 4,000,000: 

    def fib(n):
        if n == 0: return 0
        elif n == 1: return 1
        else: return fib(n-1)+fib(n-2)

In order to come in under the one second limit, I was forced to search out a more efficient generator.
The one used below utilizes Binet's forumula (http://mathworld.wolfram.com/BinetsFibonacciNumberFormula.html)
'''

from math import sqrt
def fib(n):
    rootFive = sqrt(5)
    return int(((1 + rootFive)**n - (1 - rootFive)**n) / (2**n * rootFive))

terms = []
term = 0
i = 3
while(term<cap):
    terms.append(term)
    term = fib(i)
    i=i+3

answer = reduce(lambda x,y: x+y, terms)
print terms

print answer #should me only print statement

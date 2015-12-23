#!/usr/bin/env python

'''
Problem
=======
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91x99.
Find the largest palindrome made from the product of two 3-digit numbers.
'''

def isPalindrome(num):
    num = str(num)
    charArr = list(num)
    rrArahc = list(num)
    rrArahc.reverse()
    return charArr == rrArahc

palindromes = [ j*i for i in range(900,1000) for j in range(900,1000)  if isPalindrome(j*i)]

print max(palindromes) #should be the only print statement

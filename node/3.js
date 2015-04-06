#!/usr/bin/env node
"use strict";
/**
 * Problem
 * ========
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.149s
 * user    0m0.127s
 * sys     0m0.021s
 *
 */

var _ = require('underscore'),
    startingValue = 600851475143;
    //startingValue = 13195;

/**
 * Builds an array of prime numbers 2...num using a simple sieve
 * @param {Number} num - value under which to generate primes.
 * @returns {Array} Array of primes, 2...num
 */
var primeSieve = function(num){
    var sieve = _.range(num+1);
    sieve[1] = 0; //we don't really care about 1.
    var limit = Math.ceil(Math.sqrt(num));
    var i,j;
    for(i=2; i<=limit; i++){
        for(j=i+i; j<sieve.length; j+=i){
            sieve[j] = 0; //multiple of a prime, we don't need it
        }
    }
    return _.compact(sieve);
};

//Get a array of primes up to the square root of the number
var primes = primeSieve(Math.sqrt(startingValue));

//Determine which primes are factors by mapping a simple function onto the array
var factors = _.map(primes, function(num){
    if(startingValue % num){
        return 0;
    }
    return num;
});

console.log(_.max(factors)); //should be the only print statement

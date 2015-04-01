#!/usr/bin/env node

/**
 * Problem
 * ========
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.073s
 * user    0m0.057s
 * sys     0m0.015s
 *
 */

var _ = require('underscore'),
    sieve = [],
    i;

//pre-fill array with 0s
for(i=0; i<1000; i++){
    sieve.push(0);
}

//add in the valid numbers
for(i=3; i<1000; i+=3){
    sieve[i] = i;
}
for(i=5; i<1000; i+=5){
    sieve[i] = i;
}

//Map reduce to get the sum
var answer =  _.reduce(sieve, function(memo, num){return memo + num;}, 0);
console.log(answer);

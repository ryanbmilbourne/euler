#!/usr/bin/env node

/**
 * Problem
 * ========
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.075s
 * user    0m0.059s
 * sys     0m0.016s
 *
 */

var _ = require('underscore'),
    async = require('async'),
    limit = 20; //Upper limit for divisors, where the list of divisors is 2..limit

/**
 * Builds an array of prime numbers 2...num using a simple sieve
 * @param {Number} num - value under which to generate primes.
 * @returns {Array} Array of primes, 2...num
 */
var primeSieve = function(num){
    var sieve = _.range(num+1);
    sieve[1] = 0; //we don't really care about 1.
    var cutoff = Math.ceil(Math.sqrt(num));
    var i,j;
    for(i=2; i<=cutoff; i++){
        for(j=i+i; j<sieve.length; j+=i){
            sieve[j] = 0; //multiple of a prime, we don't need it
        }
    }
    return _.compact(sieve);
};

/**
 * This uses a method for factoring that I learned in high school
 * (I never really got prime factorization too well the traditional way and this is more functional anyway :)
 * Basically we use a table to map some division of primes across the list of divisors.
 * Once the table is full of 1's, we are done and have the primes with which to calculate the LCM:
 * 
 * Figure this example:
 * ====================
 *      X 2 2 2 3 3 5 7
 *      2 1 1 1 1 1 1 1 
 *      3 3 3 3 1 1 1 1
 *      4 2 1 1 1 1 1 1
 *      5 5 5 5 5 5 1 1
 *      6 3 3 3 1 1 1 1
 *      7 7 7 7 7 7 7 1
 *      8 4 2 1 1 1 1 1
 *      9 9 9 9 3 1 1 1
 *     10 5 5 5 5 5 1 1
 *
 * In the above example, we keep using a prime number until it no longer divides evenly, then grab the next one.
 * Our answer is 2 * 2 * 2 * 3 * 3 * 5 * 7 = 2520
 */

var divisors = _.range(2,limit+1),
    primes = primeSieve(_.max(divisors)),
    primeIndex = 0,
    lcmArr = [],
    done = false;

async.until(
    function(){ return done; },
    function(cb){
        if(_.every(divisors, function(num){ return num === 1;})){
            //All done, time to go calculate the lcm
            done = true;
            return cb();
        }
        if(_.some(divisors, function(num){ return (num % primes[primeIndex]) === 0; })){
            //We can evenly divide, so map the division function onto the divisor array
            lcmArr.push(primes[primeIndex]);
            divisors = _.map(divisors, function(num){
                if(num % primes[primeIndex] === 0){
                    return num/primes[primeIndex];
                }
                return num;
            });
            return cb();
        }
        //This prime won't divide into anything so go get another one
        primeIndex++;
        return cb();
    },
    function(){
        var lcm = _.reduce(lcmArr, function(memo, num){ return memo * num; }, 1);
        console.log(lcm);
    }
);


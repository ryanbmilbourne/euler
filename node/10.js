#!/usr/bin/env node
"use strict";

/**
 * Problem
 * ========
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m1.531s
 * user    0m1.428s
 * sys     0m0.113s
 *
 */

var primeSieve = function(num){
    var sieve = new Array(num);
    var i,j;
    for(i=0; i<sieve.length;i++){
        sieve[i] = i;
    }
    sieve[1] = 0; //we don't really care about 1.
    var limit = Math.ceil(Math.sqrt(num));
    for(i=2; i<=limit; i++){
        for(j=i+i; j<sieve.length; j+=i){
            sieve[j] = 0; //multiple of a prime, we don't need it
        }
    }
    return sieve.filter(function(num){return num > 0;});
};

var primeFactory = (function(){
    //set up the initial sieve.  
    var sieveCap = 512;
    var sieve = primeSieve(sieveCap);
    var term = 0;

    return {
        next: function(){
            if(sieve[term]){
                //The term we want is in the sieve we have.
                return sieve[term++];
            } 
            //We need to expand the sieve, so double the sieve's size
            sieveCap*=2;
            sieve = primeSieve(sieveCap);
            return primeFactory.next();
        }
    }
})();

var upperBound = 2000000,
    term = 0,
    sum = 0;

while(term<upperBound){
    sum += term;
    term = primeFactory.next();
}

console.log(sum); //should be the only print statement

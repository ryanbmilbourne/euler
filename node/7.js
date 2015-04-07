#!/usr/bin/env node
"use strict";

/**
 * Problem
 * ========
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.107s
 * user    0m0.089s
 * sys     0m0.017s
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
    var sieveCap = 128;
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

for(var i=0; i<10001; i++){
    var nthTerm = primeFactory.next();
}
console.log(nthTerm);

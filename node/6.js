#!/usr/bin/env node

/**
 * Problem
 * ========
 *
 * Latest Run Stats
 * ====== === =====
 *
 */

var limit = 100;

//Calculate square of the sum of sequential naturals
var squareOfSum = Math.pow((limit*(limit+1) >> 1),2);

//Calculate pyramid number of the term
//http://en.wikipedia.org/wiki/Square_pyramidal_number
var pyramidNum = (2*Math.pow(limit,3) + 3*Math.pow(limit,2)+limit)/6

console.log(squareOfSum-pyramidNum); //should be the only print statement

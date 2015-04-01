#!/usr/bin/env node

/**
 * Problem
 * ========
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * Latest Run Stats
 * ====== === =====
 *
 */

/**
 * 20 -> 2 4 5 10
 * 19
 * 18 -> 2 3 6 9
 * 17
 * 16 -> 2 4 8
 * 15 -> 3 5
 * 14 -> 2 7
 * 13
 * 12 -> 2 3 4 6
 * 11
 * 10 -> 2 5
 * 9  -> 3
 * 8  -> 2 4
 * 7
 * 6  -> 2 3
 * 5
 * 4  -> 2
 * 3
 * 2
 */

var _ = require('underscore'),
    async = require('async'),
    limit = 10,
    divisors = _.range(2,limit),
    count = 10;

var found = false;
async.until(
    function(){ return found; },
    function(callback){
        //2 5 10?
        if((count % 10) === 0 &&    // 2 5 10
            (count % 9) === 0 &&    // 3 6 9 (6 since we've already tested for 2 and 3
            (count % 8) === 0 &&    // 4
            (count % 7) === 0){     // 7
                found = true;
                return callback();
        }
        count += 10;
        return callback();
    },
    function(){
        //all done
        console.log(count); //should be the only print statement
    }
);


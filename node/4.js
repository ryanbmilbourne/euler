#!/usr/bin/env node

/**
 * Problem
 * ========
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.101s
 * user    0m0.081s
 * sys     0m0.018s
 *
 */

var _ = require('underscore');

/**
 * Determines if a string is a palindrome or not.
 * @param {Number|String} data - The data to test
 * @returns {Boolean} True if it is a palindrome, else False
 */
var isPalindrome = function(data){
    if((typeof data) !== 'string'){
        data = data.toString();
    }
    var charArr = data.split('');
    var rrArahc = data.split('');
    rrArahc.reverse();
    return _.isEqual(charArr, rrArahc);
};

var palindromes = [];

//Let's bruteforce this.  Try (900...1000) * (900...1000) first.
_.each(_.range(900, 1000), function(num){
    _.each(_.range(900, 1000), function(num2){
        var candidate = num2*num;
        if(isPalindrome(candidate)){
            palindromes.push(num2*num);
        }
    });
});

console.log(_.max(palindromes)); //should be the only print statement

#!/usr/bin/env node
"use strict";

/**
 * Problem
 * ========
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * Latest Run Stats
 * ====== === =====
 * real    0m0.099s
 * user    0m0.070s
 * sys     0m0.025s
 *
 */

var targetSum = 1000;
var xCap = targetSum/2; //since x<y<z, x must be less than half the target value

var x,y,z;
var xx, yy, zz;

for(var x=1;x<xCap; x++){
    y = x+1;
    z = y+1;
    xx = x*x;
    while(z<targetSum){
        yy = y*y;
        while(z*z<x*x+y*y){ z+=1; }
        if(z*z == xx + yy && x+y+z == 1000){
            //omg found it
            console.log(x*y*z);
            return;
        }
        y+=1;
    }
}

console.log(answer); //should be the only print statement

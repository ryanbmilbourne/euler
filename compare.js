#!/usr/bin/env node

/**
 * @file compare.js
 * A basic script that runs the solution for each problem in each language.
 * Some organization is assumed.  Solution scripts will be organized by language
 * and named with the number of the problem that the script solves (no leading 0s).
 */


var exec = require('child_process').exec
  , _ = require('underscore')
  , async = require('async')
  , AsciiTable = require('ascii-table')

/**
 * SET THESE AS NEEDED
 */
var languages = ['node', 'python']
var problems = _.range(1,11)

var extensions = {
    node: 'js',
    python: 'py'
};

/**
 * END SET VARIABLES
 */

var results = {}
var timeReggy = /real\s+(\d+\.\d+)/

async.each(languages, function(language, languageCb){
    results[language] = {}
    async.each(problems, function(problem, problemCb){
        var execString = 'time -p ./'+language+'/'+problem+'.'+extensions[language]
        exec(execString, function(err, stdout, stderr){
            if(err){
                results[language][problem] = ''
                return problemCb();
            }
            results[language][problem] = timeReggy.exec(stderr.toString())[1];
            return problemCb()
        })
    }, function(err){
        return languageCb()
    })
}, function(err){
    var table = new AsciiTable('Euler Problem Times')
    table.setHeading(['problem'].concat(languages))
    _.each(problems, function(problem){
        var row = [problem]
        _.each(languages, function(language){
            row.push(results[language][problem])
        })
        table.addRow(row)
    })
    console.log(table.toString())
})


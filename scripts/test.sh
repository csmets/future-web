#!/bin/bash

if [ ! -d "test/css/result" ]
then
    mkdir test/css/result
fi

node_modules/browserify/bin/cmd.js -t browserify-css test/css/test.js > test/css/result/results.js

echo "<script src='results.js'></script>" > test/css/result/results.html

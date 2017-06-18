#!/bin/bash

rm -rf dist

mkdir dist

cp -R src/css dist/
cp -R src/js dist/
cp -R src/public/* dist/
cp -R vendor/* dist/

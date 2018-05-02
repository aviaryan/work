#!/bin/bash

# yarn build

# copy build files
rm -rf deploy/
mkdir -p deploy
cp -f index.html deploy/
cp -f sw.js deploy/
mkdir -p deploy/dist
cp -fR dist/ deploy/dist/
mkdir -p deploy/img
cp -fR img/ deploy/img/

git checkout gh-pages
cp -fR deploy/ .

rm -rf deploy/
git add .
git commit -m "deploy"
git push origin gh-pages

git checkout master

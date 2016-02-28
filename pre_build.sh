#!/bin/bash

echo "cd $1"
cd $1

echo "git fetch --all"
git fetch --all

echo "git reset --hard origin/master"
git reset --hard origin/master

echo "bash $1/build.sh"
bash $1/build.sh

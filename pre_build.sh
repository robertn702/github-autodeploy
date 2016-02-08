#!/bin/bash

# echo "cd /var/www/$1"
cd $1
# pwd
echo "git fetch --all"
git fetch --all
echo "git reset --hard origin/master"
git reset --hard origin/master

#!/bin/bash

if [ -z "$1" ]; then
    echo "Oops. Did you forget to enter a module name? ☹️ "
    exit 1
fi

echo "getting module [$1]..."

success=0
git clone https://github.com/kentcdodds/$1.git && 
cd $1 && 
npm run setup --silent && 
success=1

if [ success==1 ]
then echo "Done! 🚀"
else echo "Something went wrong 🤷‍♂️ "
fi 

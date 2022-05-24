#! /usr/bin/bash
master=$(git master)
current=$(git current)

# TODO stash current changes
git checkout $master;
git pull;
git checkout $current;
git rebase $master;
# TODO unstash.
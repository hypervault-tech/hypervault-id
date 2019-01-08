#!/usr/bin/env bash
set -e

composer card export -c user1@hypervault -f ./cards/user1.card
composer card export -c user2@hypervault -f ./cards/user2.card
composer card export -c resourceServer1@hypervault -f ./cards/resourceServer1.card

#!/bin/sh

composer archive create -t dir -n . -a sigurit.bna
composer network update -a sigurit.bna -c admin@sigurit
composer-rest-server -c admin@sigurit -n never -w true

#!/bin/sh

composer archive create -t dir -n . -a sigurit.bna
composer network update -a sigurit.bna -c admin@sigurit
composer-rest-server -c admin@sigurit -n never -w true

# Fresh Install Only
# composer runtime install -n sigurit -c PeerAdmin@hlfv1
# composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile sigurit.bna --file networkadmin.card

#!/bin/bash

# POST: create random timeline post using the POST endpoint 
curl -X POST http://nikkilicea.duckdns.org:5000/api/timeline_post -d \
'name=Nikki&email=nlicea@usc.edu&content=Testing my endpoints with curl!'

# GET: check the GET endpoint to make sure POST was added
curl http://nikkilicea.duckdns.org:5000/api/timeline_post
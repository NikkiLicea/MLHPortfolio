#!/bin/bash

# POST: create random timeline post using the POST endpoint 
curl -X POST http://nikkilicea.duckdns.org:5000/api/timeline_post -d 'name=Nikki&email=nlicea@usc.edu&content=Testing my endpoints with curl!'{"content":"Testing my endpoints with curl.", "created_at":"Mon, 27 June 2022 01:41:08 PST", "email":"nlicea@usc.edu", "id":0, "name":"Nikki"}

# GET: check the GET endpoint to make sure POST was added
curl http://nikkilicea.duckdns.org:5000/api/timeline_post
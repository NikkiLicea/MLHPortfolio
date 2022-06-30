#!/bin/bash
cd MLHPortfolio
git fetch && git reset origin/main --hard # get any Github updates

# Enter the python virtual environment and Install python dependencies
source python3-virtualenv/bin/activate
pip install -r requirements.txt
deactivate 

# Restart myportfolio service
systemctl restart myportfolio 

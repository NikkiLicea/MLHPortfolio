#!/bin/bash
tmux kill-session
cd MLHPortfolio
git fetch && git reset origin/main --hard
source python3-virtualenv/bin/activate
pip install -r requirements.txt
deactivate 
tmux new-session -d -s Portfolio 
tmux send-keys -t Portfolio:0 "source python3-virtualenv/bin/activate" C-m 
tmux send-keys "flask run --host=0.0.0.0" Enter

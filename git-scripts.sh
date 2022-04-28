# Just git commands
git config --global alias.rename 'branch -m --';
git config --global alias.current "rev-parse --abbrev-ref HEAD";
git config --global alias.undo "reset HEAD~1 --mixed";

# Uses bash scripts
git config --global alias.co "!sh $PWD/lib/git-checkout.sh";
git config --global alias.initial "!sh $PWD/lib/git-initial.sh";
git config --global alias.master "!sh $PWD/lib/git-master.sh";
git config --global alias.new "!sh $PWD/lib/git-new.sh";
git config --global alias.pr "!node $PWD/lib/git-pr.js";
# git config --global alias.pr "!node $PWD/lib/git-sync.js"; # WIP

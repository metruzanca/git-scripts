# This command seems to work sometimes
# basename $(git symbolic-ref --short refs/remotes/origin/HEAD);
# This command seems a bit more consistent
git branch -rl "*/HEAD" | rev | cut -d/ -f1 | rev;
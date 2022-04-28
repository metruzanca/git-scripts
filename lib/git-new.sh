git co;

git rev-parse --verify $1 &>/dev/null; # &>/dev/null pipes both stderr and stdout to /dev/null which basically hides the outputs

if [[ $? -eq 0 ]]
  then
    git checkout $1;
  else
    git checkout -b $1;
fi

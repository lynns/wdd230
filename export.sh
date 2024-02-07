if [ $# -eq 0 ]; then
    echo "You must pass the name of the branch you want to export."
    exit 1
fi

datestring=$(date +'%Y_%m_%d')
filename="$datestring-$1"
git archive $1 --format zip --output /Users/lynns/working/$filename.zip
mv /Users/lynns/working/$filename.zip /Users/lynns/OneDrive\ -\ BYU-Idaho/24Winter_wdd230
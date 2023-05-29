# This script is used to compare the config files between this and antoher project

# To run make sure that the file structure is as follows:
#	/parent_folder
#		/ts_init (this project)
#			compare.sh (this file)
#		/svelte_init

cd "${0%/*}"   # move to current directory, so execution is always relative to this file
# set -o xtrace  # Print commands as they are executed
set -o errexit # Exit on error

function exit_with_message() {
	echo "$1"
	exit 1
}

other_project="$1"
[ -d "$other_project" ] || exit_with_message "Directory \"$other_project\" does not exist"

function open_compare()	{
	[ -f "$1" ] || exit_with_message "File $1 does not exist"
	other="$other_project/$1"
	[ -f "$other" ] || exit_with_message "File $other does not exist"

	echo "Comparing $1 and $other"
	code --wait --diff "$1" "$other"
}

# SECTION OF INTEREST
open_compare .github/workflows/containerize.yaml
open_compare .dockerignore
open_compare .eslintrc.js
open_compare .gitignore
open_compare .npmrc
open_compare .prettierrc
open_compare docker-compose.yaml
open_compare Dockerfile
open_compare tsconfig.json
open_compare workspace.code-workspace

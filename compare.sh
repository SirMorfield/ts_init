# This script is used to compare the config files between this and antoher project

# To run make sure that the file structure is as follows:
#	/parent_folder
#		/ts_init (this project)
#			compare.sh (this file)
#		/svelte_init

cd "${0%/*}"   # move to current directory, so execution is always relative to this file
set -o xtrace  # Print commands as they are executed
set -o errexit # Exit on error

other_project="../svelte_init"
[ -d "$other_project" ] || echo "Directory $other_project does not exist"

function open_compare()	{
	[ -f "$1" ] || echo "File $1 does not exist"
	other="$other_project/$1"
	[ -f "$other" ] || echo "File $other does not exist"

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

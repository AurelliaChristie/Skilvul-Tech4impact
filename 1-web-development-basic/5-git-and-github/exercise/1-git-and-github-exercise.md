# Git & Github Exercise

1. Mention all the steps and command line to initiate a project using Git until push it to Github

Answer:

- Initiate the project

```
git init <project_name>
```

- Create a Github repository on the Github website (make sure you don't add `README.md` file first)

- Copy the commands from Github to your command line (make sure you are in the project directory)

```
# Create README.md file
echo "# <name of the repository>" >> README.md
git init

# Update the file
git add README.md

# Commit the file 
git commit -m "first commit"

# Create master branch main
git branch -M main

# Remote the repository to the computer
git remote add origin <link of the Github repository>

# Push the changes to main
git push -u origin main
```

2. What is the difference between `git revert` and `git reset`?

Answer:

Using `git revert`, we only move tp previous commit without deleting the following commits after the desired commit. On the other hand, using `git reset`, we move to the previous commit and delete all the following commits after the desired commit.


3. What is the difference between `Git` and `Github`?

Answer:

`Git` is a version control system while `Github` is a Git repository hosting service.

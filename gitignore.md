adding .gitignore :

you can add a global .gitignore that ignores files in *every* git repository on your computer.

first you create the file at 

~/.gitignore_global and add some rules to it. 

then you open your terminal and run this :

$ git config --global core.excludesfile ~/.gitignore_global

alternatively you can add a local .gitignore that determines which files and directories to ignore, before you make a commit.

the .gitignore file itself should be committed into your repository, so that any other users that clone the repository may 

know the ignore rules.

Github has a list of gitignore templates you can use for reference [here](https://github.com/github/gitignore)

in your terminal navigate to the repo and run touch  .gitignore 

here are [some good practices for your .gitignore file](https://gist.github.com/octocat/9257657) 

If you already have a file checked in, and you want to ignore it, Git will not ignore the file if you add a rule later. In those cases, you must untrack the file first, by running the following command in your terminal:

$ git rm --cached





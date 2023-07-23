![patterns-gof](https://socialify.git.ci/denilson-santos/patterns-gof/image?font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Light)

# Instrutions for enabling githooks:

- In the root directory of the project, create a symlink from the git hooks folder to the ".git" folder in the local repository:
```console
ln -s $(pwd)/githooks/* $(pwd)/.git/hooks
```
- Add execute permission to hooks:
```console
chmod +x githooks/*
```

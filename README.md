# Instrutions for enabling githooks:

- In the root directory of the project, create a symlink from the git hooks folder to the ".git" folder in the local repository:
```console
ln -s $(pwd)/githooks/* $(pwd)/.git/hooks
```
- Add execute permission to hooks:
```console
chmod +x githooks/*
```

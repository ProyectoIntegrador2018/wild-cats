# Instructor Interactivo de AFA: Deployment
The program repository is currently set-up to automatically deploy any changes made to the master branch onto the development environment by using Travis CI. The project is hosted at firebase: https://afa-helper.firebaseapp.com/

## Table of contents

* [Preconditions](#Preconditions)
* [Installation](#Installation)

### Preconditions
Having the following tools installed and configured:
- Git ([Instrucciones](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
- Firebase CLI ([Instrucciones](https://firebase.google.com/docs/cli?hl=es))

### Clone or update repository
If you don't have a copy of the repository, you will have to clone it first:
```bash
$ git clone https://github.com/ProyectoIntegrador2018/wild-cats.git
```

Run the following command to make sure everything is up to date:
```bash
$ git status
```

You should see the following message:
```
On branch master
Your branch is up-to-date with 'origin/master'.
```

If not, make sure your working directory is clean and that the local branch is up to date:
```bash
$ git pull origin master


### Environment Variables
The program was initially setup with the firebase API as database, storage and hosting. We include the `FIREBASE_TOKEN` in the Travis CI conifiguration to automatically deploy. 



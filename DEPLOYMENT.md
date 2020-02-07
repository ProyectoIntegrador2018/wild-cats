# Instructor Interactivo de AFA: Deployment
The program repository is currently set-up to automatically deploy any changes made to the master branch onto the development environment by using Travis CI. The project is hosted at firebase: https://afa-helper.firebaseapp.com/

## Table of contents

* [Preconditions](#Preconditions)
* [Installation](#Installation)
* [Implementacion](#Implementacion)

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
```

### Environment Variables
The program was initially setup with the firebase API as database, storage and hosting. We include the `FIREBASE_TOKEN` in the Travis CI conifiguration to automatically deploy. 


### Implementacion
Para implementar el sistema es necesario que usen jQuery en su sistema. Lo pueden usar instalar 
usando el CDN de ([jQuery](https://code.jquery.com/)).

Sigan los siguientes pasos para dicha implementacion:

1. Pasar cada uno de los partials a su directorio de trabajo donde vayan a usar el instructor. Los partials son todos aquelos archivos HTML que se encuentran en la carpeta public que empiezan on un guion bajo(_) -> _partial.html

2. Pasar el archivo index.css a su directorio de trabajo donde vayan a usar el instructor. 

3. Pasar el archivo index.js a su directorio de trabajo donde vayna a usar el instructor. Este archivo Javascript lo que hace es inyectar lo los partials en el HTML. Pueden cambiar el nombre del archivo si lo desean. 

4. Insertar el siguiente codigo HTML. Estos son cada uno de los sidebars. Puede ser al final del body tag:
```
<div class="section show-sidebar"></div>
<div class="section show-sidebar-diagnostico"></div>
<div class="section show-sidebar-mejora"></div>
<div class="section show-sidebar-analisis"></div>
<div class="section show-sidebar-contexto"></div>
<div class="section show-sidebar-verificacion"></div>
<div class="section show-sidebar-FAQ"></div>
<div class="section show-sidebar-terminos"></div>
```

5. Insertar el siguiente codigo HTML en cada una de las secciones formulario:
```
<button class="no-style-btn" type="button" name="button"> <i class="fas fa-question-circle action-color"></i>
```

# Angular-Bulma-Github-Users

Angular App using Bulma CSS Framework and GitHub Users API (ngbulmagithubusers)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[Angular CLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

## Install global packages: Angular CLI, Firebase Tools

```
npm install -g @angular/cli  
```

## Code scaffolding

ng new ng8bulmatemplate --routing --style scss --enable-ivy --skip-install

### Using Ivy Renderer Engine


Until the Ivy Renderer Engine is in production I strongly recogmend disabling it. In the angularCompilerOptions in your project's tsconfig.app.json file set enableIvy to false.

```
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": false
  }
}
```

AOT compilation with Ivy is faster and should be used by default. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

```
{
  "projects": {
    "ng8bulmatemplate": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
            ...
          }
        }
      }
    }
  }
}
```

## Code scaffolding
### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --enable-ivy

The enable-ivy option enables the next generation renderer.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### ng new command

```
ng new ngbulmagithubusers --routing --style scss --enable-ivy --skip-install
```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### ng generate commands

```
ng generate module core -m app
ng generate service core/services/user
ng generate component core/components/footer -m core
ng generate component core/components/header -m core
ng generate component contact -m app
ng generate component home -m app
ng generate component users/user-signal -m app
ng generate component users/user-list -m app
ng generate module users --routing
```
## Install Bulma.

```
npm install bulma --save
```
Update the styles property in angular.json to include the new stylesheet for Bulma.

```
{
  ...
  "styles": [
    "node_modules/bulma/css/bulma.min.css",
    "src/styles.css"
  ],
  ...
}
```

Modify the file src/app/core/core.module.ts add exports for HeaderComponent and FooterComponent.

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent    
  ]
})
export class CoreModule { }
```

## Install Node Packages

```
npn install
```

## Install NPM Check Update (NCU) ad Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

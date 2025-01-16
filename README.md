# HarryfrescoAngular
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## To Commit, Test, Build and Deploy

You just need to include this in your Github Commit message. Otherwise it will build twice, before and after tests:
```
[skip netlify]
```
I have set up a Github Action to run Playwright Tests -> Then it triggers Netlify to build and publish


## Just build.

```bash
ng build --base-href="https://harryfresco.co.uk/"
```
Then, copy contents of browser folder up a level, to sit in docs
Copy index.html and rename the copy to 404.html
Make sure CNAME with harryfresco.co.uk is at the same level as index.html
Then commit and push to Git

## OR use the build script

Run buildScriptNetlofy.sh to do the above steps for you


## To run tests
```bash
npx playwright test --ui
```
or to run in CLI:
```bash
npx playwright test
```
## To run the Playwright Codegen
```bash
npx playwright codegen harryfresco.co.uk
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

hello
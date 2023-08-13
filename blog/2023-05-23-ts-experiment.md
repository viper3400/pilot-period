---
slug: ts-experiment
title: Typescript Experiment
authors: [jang]
tags: [Typescript, npm]
draft: true
---
## Introduction

Until now, I've done some personal C# projects and some Typescript projects.

When I started to become a developer I did this by following tutorials, using templates and doing copy & paste.

I used monorepos created libraries, published and reused them. Focus was always to gain quick wins, not to dive deep into this or that.

## A Minimal Typescript Project

In a first step I want to set up a minimal typescript project the exports some module and reuse this in another project. I want to do all this on my local development machine.

Most tutorials and templates tend to loose focus and add sugar, that makes it hard to understand the basic dough.

And to make it clear, it's not much that it needs.

```
mkdir minimal-ts-project
cd minimal-ts-project
```

Then create a `package.json` and a `tsconfig.json` in your projects root folder. Leave the `tsconfig.json` empty. For the `package.json` use something like this:

```json title="package.json"
{
    "name": "minimal-ts-project",
    "version": "0.0.1",
    "devDependencies": {
        "typescript": "^5.0.4"
    }
}
```

The `package.json` contains information about you project. But just `name` and `version` are mandatory fields. As we want to use typescript, we add a `devDependency` to it.

Then run `npm install` and that's it! You can now start your project.

Create a `sample-service.ts`:

```typescript title="sample-service.ts"
function sum(operator1: number, operator2: number) {
    return operator1 + operator2
}

const result = sum(4, 2);
console.log("Sum is: " + result);
```

As we are using typescript we have to transpile our code by calling `npx tsc`. As our `tsconfig.json` file is empty, this call will use default build values and generate a `sample-service.js` file.

We can now execute our code using Node:

```bash
$> node sample-serivce.js
Sum is: 6
```

:::info npx and tsc
`tsc` stands for TypeScript Compiler and is a command line tool that compiles TypeScript into JavaScript that can be executed. Always remember, that ["TypesScript ist JavaScript with syntax for types"](https://www.typescriptlang.org/). `npx` is a command line tool that comes with `npm`. It can execute global and local `node_modules`.

As we referenced TypeScript in our `package.json` via `npm install` before, we installed `tsc` as well.
:::

In a first step I want to 
- set up a Typescript project from scratch
- add Serenity/JS (with mocha) to support a test driven approach
- implement some simple calculator function
- run the test

In the second step I want to
- set up a second Typescript project with similar example functions
- but set up a monorepo for both of the projects as well
- consume the functions from both project in a third project in this monorepo

:::note
I don't say, that we should not use templates. But often they "pollute" your project from the start.
As a beginner (and maybe as advanced, as well) you may not have a glue
where which configuration file belongs to and what default setting where chosen why by the
maintainer of the template. 
:::

My basic setup for managing my local NodeJs environment is [volta](https://volta.sh/) with current latest NodeJS LTS version 18.16.0.

## Set up Typescript

To get started let's start simple and just follow the official [Typescript documentation](https://www.typescriptlang.org).

```bash
mkdir lib1
cd lib1
npm init
```

This will start an interactive tool that does not more than create a `package.json`:

```json title="package.json"
{
  "name": "@viper3400/ts-experiment-lib1",
  "version": "0.0.0",
  "description": "Library 1 for my ts-experiment",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jan Graefe",
  "license": "MIT"
}
```

Next we will install Typescript in the current version, by the time of writing it is 5.0.4, and then init typescript.

```bash
npm install typescript --save-dev
npx tsc --init
```

`npm install` will add a dependency to our `package.json` and download all necessary files into the `node_modules` folder.

The last command generates a default `tsconfig.json`, visit https://aka.ms/tsconfig to read more about this file:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es2016",                              
    "module": "commonjs",
    "esModuleInterop": true,                       
    "forceConsistentCasingInFileNames": true, 
    "strict": true,  
    "skipLibCheck": true 
  }
}
```

Time to start some version control. I run `git init` to initialize a new repository. Most likely, I do not want to include all the files from the `node_modules` folder. So I add a `.gitignore` file to the root folder of my project:

```- title=".gitignore"
node_modules
```

I stage my changes and do a first initial commit.

## A Test Driven Approach?

What a about a test driven approach right away from the start? I love [Serenity/JS](https://serenity-js.org/).
Serenity/JS supports a wide range of underlying test frameworks. For the ease of use
I go just with mocha for now.

### Set up Mocha

`npm install @types/node @types/expect @types/mocha --save-dev`

### Set up Serenity/JS

And here is how I set it up. I have to add some development dependencies to my projects `package.json` and
then run a `npm install` again.

```json title="package.json"
[...]
  "devDependencies": {
    "@serenity-js/assertions": "^3.2.1",
    "@serenity-js/console-reporter": "^3.2.1",
    "@serenity-js/core": "^3.2.1",
    "@serenity-js/mocha": "^3.2.1",
    "@serenity-js/rest": "^3.2.1",
    "@serenity-js/serenity-bdd": "^3.2.1",
    "mocha": "^10.2.0",
    "@types/mocha": "^10.0.1",
    "@types/node": "^16.18.32",
    "npm-failsafe": "^1.0.0",
    "rimraf": "^5.0.1",
    "ts-node": "^10.9.1"
    [...]
  }
[...]
```
I replace the script section of my `package.json` as well:

```json title="package.json"
[...]
"scripts": {
    "postinstall": "serenity-bdd update",
    "clean": "rimraf target",
    "test": "failsafe clean test:execute test:report",
    "test:execute": "mocha",
    "test:report": "serenity-bdd run"
  },
  [...
  ```
]


Then I create the following folders and files in my projects root structure:

```
.mocharc.yml
|-src
  Calculator.ts
  index.ts
|-tests
  |-spec
    calculator.spec.ts
    |-support
      serenity.config.ts
  |-src
    Actors.ts
    index.ts
```

```ts title="./tests/src/Actors.ts"
import { Actor, Cast, TakeNotes } from '@serenity-js/core';

export class Actors implements Cast {

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            TakeNotes.usingAnEmptyNotepad()
        );
    }
}
```

```ts title="./tests/src/index.ts"
export * from './Actors'
```

```ts title="./tests/spec/support/serenity.config.ts"
import 'mocha';

import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, configure } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';

import { Actors } from '../../src';

/**
 * @desc
 *  Set up Serenity/JS reporting services before any scenarios are executed
 *
 * @see https://serenity-js.org/handbook/reporting/index.html
 */
configure({
    actors: new Actors(),
    crew: [
        ConsoleReporter.withDefaultColourSupport(),
        new SerenityBDDReporter(),
        ArtifactArchiver.storingArtifactsAt(__dirname, '../../../target/site/serenity'),
    ]
});
```

```yaml title="./mocharc.yml"
check-leaks: false
color: true
diff: true
full-trace: true
reporter: '@serenity-js/mocha'
require:
  - ts-node/register
  - tests/spec/support/serenity.config.ts
spec: 'tests/spec/**/*.spec.ts'
timeout: 5000
v8-stack-trace-limit: 100
```

### First Spec
```ts title="./test/spec/calculator.spec.ts"
/* eslint-disable unicorn/filename-case, unicorn/consistent-function-scoping */
import 'mocha'

import { Ensure, equals } from '@serenity-js/assertions'
import { Question, actorCalled } from '@serenity-js/core'
import { Sum } from '../src';
import { Calculator } from '../../src';

const sum = (firstOperator: number, secondOperator: number) => 
  Question.about(`sum of ${firstOperator} and ${secondOperator}`, (actor) =>
    actor.answer(new Calculator().sum(firstOperator, secondOperator)))
describe('Calculator', () => {

    describe('sum', () => {

        it('supports calculating a sum', () =>
            actorCalled('Calculon').attemptsTo(
                Ensure.that(8, equals(sum(4,4,))),
                Ensure.that(0, equals(sum(-3,3))),
                Ensure.that(0, equals(sum(-1, 1)))
            ));
    });
})
```
This will throw an error, as I haven't implemented the `Calculator` class, yet.

:::tip
I would rather use a Serenity/JS `Task` to wrap the the `Ensure` and the `Question`, but let's not
blow up this small example. See https://serenity-js.org/handbook/design/screenplay-pattern#tasks
:::

## First implementation
Okay, lets do this. 

```ts title="./src/Calculator.ts"
export class Calculator {
    sum = (firstOperator: number, secondOperator: number) =>
      firstOperator + secondOperator
}
```
## Run the Tests
If we now run `npm test` our Serenity/JS tests should run green.

## Linting

## Set up the monorepo

```
mkdir monorepo
cd monorepo
npm init
npm install lerna --save-dev
npx lerna init
```
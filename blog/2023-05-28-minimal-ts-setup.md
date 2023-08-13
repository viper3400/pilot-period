---
slug: minimal-ts-project
title: A Minimal TypeScript Project
authors: [jang]
tags: [TypesScript, npm, npx, tsc]
draft: true
---
## Introduction

Until now, I've done some personal C# projects and some TypeScript projects.

When I started to learn programming I did this by following tutorials, using templates and doing copy & paste.

I used monorepos, created libraries, published and reused them before - but focus was always to gain quick wins, not to dive deep into this or that.


:::caution
This is just an experiment to find out a minimal configuration. It's not a blueprint for any productive projects.
:::

## A minimal TypeScript project

:::note Preconditions
I assume you have some experience with Node.js and TypeScript. To follow the steps you should have [Node.js](https://nodejs.org/en) installed.
:::

In this experiment we will create 
- a minimal TypeScript project
- create and `export` a `sum` function
- re-use the function in another minimal TypeScript project (using npm link)

In my opinion, most tutorials and templates tend to loose focus by adding fancy sugar, that demonstrates how rich and mighty the whole toolchain is. There is much to learn there, but then it's hard to understand the very basics.

And to make it clear, **it doesn't take much to get TypeScript to work.**

```
mkdir minimal-ts-project
cd minimal-ts-project
```

Then we create a `package.json` and a `tsconfig.json` in the root folder of our project.We leave the `tsconfig.json` empty. For the `package.json` we use this:

```json title="package.json"
{
    "name": "minimal-ts-project",
    "version": "0.0.1",
    "devDependencies": {
        "typescript": "^5.0.4"
    }
}
```

The `package.json` contains information about our project. But just `name` and `version` are mandatory fields. As we want to use typescript, we add a `devDependency`.

Then we run `npm install` and that's it! We can now start writing TypeScript code in our project.

:::note
Most tutorials recommend to use `npm init` and `npx tsc --init` to set upn the project. I added an appendix, to explain what the tools do. To do it the most simple way we create all necessary configuration ourselves in this experiment.
:::

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


## Export sum function

### Reuse in current project

Until now we've just one `sample-service.ts` that contains a function and then consumes the functions. Let's clean up our code a bit and create a `service-consumer.ts`

```typescript title="service-consumer.ts"
import { sum } from './sample-service';

const result = sum(4, 2);
console.log("Sum is: " + result);
```

To be able to consume our function from elsewhere we have to `export` it. 

```typescript title="sample-service.ts"
export function sum(operator1: number, operator2: number) {
    return operator1 + operator2
}
```

### Import from another project

Let's create a second project called _app_.

```bash
mkdir app
cd app 
```

As before, create a `package.json` and `tsconfig.json` and run `npm install`. Then create an `app.ts` file. Our overall folder structure should now look like

```
.
|- app
  |- package.json
  |- package-lock.json
  |- tsconfig.json
  |- app.ts
|- minimal-ts-project
  |- package.json
  |- package-lock.json
  |- tsconfig.json
  |- sample-service.ts
  |- service-consumer.ts
```

To test our `minimal-ts-project` on our local machine we use [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link).

```bash
cd minimal-ts-project
npm link

cd ..

cd app
npm link minimal-ts project
```
Now we are able to `import` the `sum` function from our "external" `minimal-ts-project` into our _app_.

```typescript title="app.ts"
import { sum } from 'minimal-ts-project/sample-service';
console.log("Sum from external lib is: " + sum(4,3));
```

In our `app` folder we can now run the `npx tsx` to generate the `app.js`. We can utilize our script by running `node app.js`.

## Conclusion

Well, that's it. As you can see, complexity will come from other things we have not considered here, but not from creating a TypeScript (or JavaScript) library itself.

## Appendix: Initialize your project with npm and tsc
### Create the package.json using npm init
Most tutorials will advise to create your project using `npm init`. This is a small interactive command line tool that will ask you some questions and then create the `package.json` for you.

```json title="package.json generated using npm init"
{
  "name": "package_created_with_npm_init",
  "version": "1.0.0",
  "description": "A small project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jan",
  "license": "MIT"
}
```

It's always a good practice to provide some more information about your project. We will need some extension like the `scripts` section for sure later in our project. But the only fields that are required are `name` and `version` - and then the dependencies to the packages you'd like to install locally.

See [reference for the package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) for more information.

### Create the tsconfig.json using npx tsc --init
Tutorials will go on with `npm install typescript --save-dev` to your project and then run a `npx tsc --init`. This will create you a `tsconfig.json` with some values set and all other possible switches as comments. 

This are just the "active" values in my generated file, I removed the comments:

```json title="tsconfig.json generated using npx tsc --init"
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

When executing `npx tsc` the compiler will search for a `tsconfig.json` in your project and fail, if none can be found. But as we found out before, this file can be all empty. 

Though, you won't know anything about the defaults that are applied and they may change with different TypeScript versions.

There is a lot of things we can do with this configuration and we will definitely have to tweak it later, anyhow to reach our goal. Find [the reference](https://www.typescriptlang.org/tsconfig) for more information about the config.

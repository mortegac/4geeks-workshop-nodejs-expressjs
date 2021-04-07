





## Add TypeScript


Let’s add two libraries to the development server as devDependencies.

- `typescript` is a core library that helps to compile the TypeScript code to valid JavaScript
- `ts-node` is a utility library that helps to run a development server written using TypeScript directly from the terminal.

To install them, from a terminal window run the following command:

```
yarn add -D typescript ts-node
yarn add -D @types/node @types/express
```


## Create tsconfig.json


```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```

The compilerOptions is a mandatory field that needs to be specified. The options used in the config above are:

- `target` allows us to specify the target JavaScript version that compiler will output
- `module` allows us to use a module manager in the compiled JavaScript code. The commonjs is supported and is a standard in Node.js
- `rootDir` is an option that specifies where the TypeScript files are located inside the Node.js project
- `outDir` specifies where the output of the compiled is going to be located
- `esModuleInterop` allows us to compile ES6 modules to commonjs modules
- `strict` is an option that enables strict type-checking options
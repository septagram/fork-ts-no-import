# [Cannot import when running webpack with ts-node](https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/158)

How to test:

```
npm install
npm run test
```

...results in the following output:

```
$ npm run test

> fork-ts-no-import@1.0.0 test d:\Dropbox\Code\fork-ts-no-import
> better-npm-run test

running better-npm-run in d:\Dropbox\Code\fork-ts-no-import
Executing script: test

to be executed: ""node_modules/.bin/webpack" --progress --colors --config "webpack/config.ts""
fork-ts-checker-webpack-plugin is undefined

d:\Dropbox\Code\fork-ts-no-import\webpack\config.ts:5
new ForkTsCheckerWebpackPlugin ({})
^
TypeError: fork_ts_checker_webpack_plugin_1.default is not a constructor
    at Object.<anonymous> (d:\Dropbox\Code\fork-ts-no-import\webpack\config.ts:5:1)
    at Module._compile (d:\Dropbox\Code\fork-ts-no-import\node_modules\v8-compile-cache\v8-compile-cache.js:178:30)
    at Module.m._compile (d:\Dropbox\Code\fork-ts-no-import\node_modules\ts-node\src\index.ts:439:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Object.require.extensions.(anonymous function) [as .ts] (d:\Dropbox\Code\fork-ts-no-import\node_modules\ts-node\src\index.ts:442:12)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (d:\Dropbox\Code\fork-ts-no-import\node_modules\v8-compile-cache\v8-compile-cache.js:159:20)
    at WEBPACK_OPTIONS (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\convert-argv.js:133:13)
    at requireConfig (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\convert-argv.js:135:6)
    at d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\convert-argv.js:142:17
    at Array.forEach (<anonymous>)
    at module.exports (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\convert-argv.js:140:15)
    at yargs.parse (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\cli.js:241:39)
    at Object.parse (d:\Dropbox\Code\fork-ts-no-import\node_modules\yargs\yargs.js:563:18)
    at d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\cli.js:219:8
    at Object.<anonymous> (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack-cli\bin\cli.js:530:3)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (d:\Dropbox\Code\fork-ts-no-import\node_modules\webpack\bin\webpack.js:155:2)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! fork-ts-no-import@1.0.0 test: `better-npm-run test`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the fork-ts-no-import@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Septi\AppData\Roaming\npm-cache\_logs\2018-09-22T03_55_19_146Z-debug.log
```

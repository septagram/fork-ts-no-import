import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// Also does not work: import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

console.log ('fork-ts-checker-webpack-plugin is', ForkTsCheckerWebpackPlugin)
new ForkTsCheckerWebpackPlugin ({})

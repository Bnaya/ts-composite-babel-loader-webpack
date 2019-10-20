# typescript project references + webpack via **babel**

Using `babel-loader` and not `ts-loader`. ts-loader has built-in support for project references.

## Motivation

CRA issue [#7807](https://github.com/facebook/create-react-app/issues/7807)

## Info

No typechecking via webpack plugin. `fork-ts-checker-webpack-plugin` doesn't support project refs yet [#328](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/328).

 use `yarn typecheck` that uses `tsc` under the hood.

## The project includes 4 packages

* `target1` - the package we build with webpack, that imports code from the other packages.
* `common` - the files layout is optimal for no-build editing experience. vscode knowns to pick the typescript sources. but has specific layout. can't have `outdir`
* `utils` - same as `common`, just to add another level of deps
* `withdist` - another approach, with caveats. mostly no no-build editing experience. but we can have `outDir`

Read [packages/target1/src/index.ts](./packages/target1/src/index.ts) for additional info

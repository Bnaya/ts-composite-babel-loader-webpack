module.exports = {
  entry: "./packages/target1/src/index.ts",
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    mainFields: [
      // needed for @workspace/withdist
      "typescriptSource",
      "browser",
      "module",
      "main"
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"]
      }
    ]
  }
};

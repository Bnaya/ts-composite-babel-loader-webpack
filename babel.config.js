module.exports = function(api) {
  api.cache.never()

  return {
    // why not picking up .babelrc
    "presets": [
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          "debug": false,
          "targets": {
            "browsers": "last 1 Chrome versions"
          },
          "modules": false
        }
      ]
    ]
    // ...require(require("path").resolve(__dirname, "./.babelrc"))
    // babelrcRoots: [
    //   // Keep the root as a root
    //   ".",

    //   // Also consider monorepo packages "root" and load their .babelrc files.
    //   "./packages/*"
    // ]
  };
}

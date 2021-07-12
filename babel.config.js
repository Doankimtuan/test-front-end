module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          cwd: "babelrc",
          root: ["./src"],
          extensions: [".js", ".ios.js", ".android.js"],
          alias: {
            "@src": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@styles": "./src/styles",
            "@redux": "./src/redux",
            "@utils": "./src/utils",
            "@api": "./src/api",
          },
        },
      ],
    ],
  };
};

module.exports = {
    extends: "standard-with-typescript",
    env: {
      "cypress/globals": true
    },
    parserOptions: {
      project: './tsconfig.json'
    },
    plugins: ["cypress"],
    settings: {
      jest: {
        version: 29
      }
    }
  };
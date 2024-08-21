module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser para TypeScript
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "google" // Usa a configuração de ESLint do Google
  ],
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "require-jsdoc": "off", // Desativa a exigência de JSDoc se não for necessário
    "react/prop-types": "off", // Desativa a verificação de prop-types para TypeScript
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }] // Ignora variáveis não usadas que começam com "_"
  },
  settings: {
    react: {
      version: "detect" // Detecta automaticamente a versão do React
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  }
};

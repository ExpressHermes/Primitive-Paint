module.exports = {
    plugins: ["html"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
    },
    globals: {
        Path: "readonly",
        tool: "readonly"
    }
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
	'html'
  ],
  rules: {
	  "semi":"off",
	  "react/react-in-jsx-scope": "off",
	  "react/jsx-filename-extension":"off"
	  
  },
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@src": ["./src"],
          "@tests": ["./tests/"],
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@assets": "./src/assets",
          "@services": "./src/services",
        }
      }
    ]
  ]
};

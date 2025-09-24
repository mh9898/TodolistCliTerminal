module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@utils': './src/utils',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@assets': './src/assets',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};

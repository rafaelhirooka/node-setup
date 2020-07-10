module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/app/models',
        '@controllers': './src/app/controllers',
        '@services': './src/app/services',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};

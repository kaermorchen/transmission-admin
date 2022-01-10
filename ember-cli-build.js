'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-mdi': {
      icons: [
        'download',
        'upload',
        'check',
        'play',
        'pause',
        'alert',
        'close-circle',
        'database-search',
        'swap-vertical',
      ],
    },
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
          },
          {
            module: require('tailwindcss'),
            options: {
              config: './app/styles/tailwind.config.js',
            },
          },
        ],
      },
    },
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
      presets: ['@babel/preset-typescript'],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            allowDeclareFields: true,
          },
        ],
      ],
    },
  });

  return app.toTree();
};

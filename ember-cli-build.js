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

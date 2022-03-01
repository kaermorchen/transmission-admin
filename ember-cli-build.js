'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-mdi': {
      icons: [
        'alert',
        'check',
        'close-circle',
        'cog',
        'database-search',
        'download',
        'pause',
        'play',
        'swap-vertical',
        'upload',
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

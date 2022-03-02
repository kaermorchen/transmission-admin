'use strict';

const path = require('path');

const appRoot = path.join(__dirname, '../../');
const appEntry = path.join(appRoot, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

module.exports = {
  content: [path.join(appEntry, relevantFilesGlob)],
  theme: {
    extend: {
      colors: {
        light: '#E5E7EB',
        secondary: '#374151',
        dark: '#1F2937',
        primary: '#2563EB',
      },
    },
  },
  plugins: [],
};

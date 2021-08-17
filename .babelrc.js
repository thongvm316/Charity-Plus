const plugins = [
  '@babel/transform-runtime', // use for dynamic import with async await
  '@babel/plugin-syntax-dynamic-import',
  'lodash',
  [
    'babel-plugin-transform-imports',
    {
      '@material-ui/core': {
        transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/icons': {
        transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true,
      },
    },
  ],
]

// Cannot load "react-refresh/babel" in production
if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel')
}

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/env', { targets: { node: 6 } }, 'use for lodash'], // config for lodash
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: plugins,
}

//  { runtime: 'automatic' } // ? allow us no need import react to components, if need user useState or useEfect and so on... of React, just use "import { useState } from "react""

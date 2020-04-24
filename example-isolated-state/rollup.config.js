const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

const plugins = [
  resolve(),
  commonjs({
    extensions: ['.cjs', '.js'],
  }),
];
module.exports = [
  {
    input: './dual-package-hazard.js',
    output: {
      file: 'dual-package-hazard.dist.cjs',
      format: 'cjs',
    },
    plugins,
  },
];

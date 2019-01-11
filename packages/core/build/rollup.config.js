// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import resolve from 'rollup-plugin-node-resolve';
import nodent from 'rollup-plugin-nodent';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  output: {
    file: 'dist/index.js',
    name: 'components',
    // exports: 'named',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
    buble({
      objectAssign: 'Object.assign',
    }),
    nodent(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
    }),
  ],
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;

// @ts-check
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const input = 'src/index.ts';

export default [
  // Universal module definition (UMD) build
  {
    input,
    output: {
      file: 'dist/simple-immutable-storage.js',
      format: 'umd',
      name: 'SIS',
    },
    plugins: [
      // Setting development env before running other steps
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      typescript(),
    ],
  },
  // Universal module definition (UMD) build (production)
  {
    input,
    output: {
      file: 'dist/simple-immutable-storage.min.js',
      format: 'umd',
      name: 'SIS',
    },
    plugins: [
      // Setting production env before running other steps
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      typescript(),
      terser(),
    ],
  },
  // ESM build
  {
    input,
    output: {
      file: 'dist/simple-immutable-storage.esm.js',
      format: 'esm',
    },
    plugins: [typescript()],
  },
  // CommonJS build
  {
    input,
    output: {
      file: 'dist/simple-immutable-storage.cjs.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
];

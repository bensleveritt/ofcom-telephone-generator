import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/main.ts',
  output: {
    format: 'umd',
    file: './dist/ofcom-telgen.js',
    name: 'ofcom-telgen',
  },
  plugins: [typescript()],
};

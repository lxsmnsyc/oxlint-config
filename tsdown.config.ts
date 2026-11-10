import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    {
      node: 'src/node.ts',
      react: 'src/react.ts',
    },
  ],
  dts: true,
  exports: true,
});

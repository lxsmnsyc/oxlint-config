import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    {
      react: 'src/react.ts',
    },
  ],
  dts: true,
  exports: true,
});

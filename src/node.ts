import { defineConfig } from 'oxlint';

import baseConfig from './index';

// For code that node runs directly, without a bundler: relative imports need
// their file extension.
export default defineConfig({
  extends: [baseConfig],
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
  },
});

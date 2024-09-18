import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignores: ['build/', 'node_modules', '*.config.cjs'],
    plugins: {
      'simple-import-sort': {
        rules: {
          'simple-import-sort/imports': 'error',
          'simple-import-sort/exports': 'error',
        },
      },
    },
  }
);

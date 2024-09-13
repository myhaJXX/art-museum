import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignores: ['build/', 'node_modules', '*.config.cjs'],
  }
);

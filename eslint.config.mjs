import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        require: true,
        commonjs: true,
        es2021: true,
        node: true
      },
      sourceType: 'script'
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    },
  }
);
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'design.js', '.zero-ui/**']
}, ...compat.extends('next/core-web-vitals', 'next/typescript'), {
  'rules': {
    'quotes': [2, 'single', { 'avoidEscape': true }]
  }
}];

export default eslintConfig;

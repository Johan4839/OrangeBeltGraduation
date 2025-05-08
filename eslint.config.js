import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            parserOptions: {
                project: ['./tsconfig.json', './tsconfig.test.json'],
                sourceType: 'module',
            },
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier: pluginPrettier,
        },
        rules: {
            ...ts.configs.recommended.rules,
            quotes: ['error', 'double'],
            radix: 'off',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            complexity: ['warn', { max: 4 }],
        },
    },
    {
        files: ['test/**/*.ts', 'test/**/*.tsx'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                test: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    prettier,
    {
        ignores: ['dist', 'coverage', 'node_modules'],
    },
];
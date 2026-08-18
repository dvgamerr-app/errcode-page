import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{ ignores: ['.svelte-kit/**', 'build/**', 'node_modules/**'] },
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.es2017,
				...globals.node
			}
		}
	}
];

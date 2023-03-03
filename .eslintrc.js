module.exports = {
	env: {
		browser: false,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		// 'prettier/prettier': ['error'], // TODO

		'array-callback-return': 'error',
		'no-array-constructor': 'error',
		'no-duplicate-imports': ['error', { includeExports: true }],
		'no-extend-native': 'error',
		'no-nested-ternary': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-throw-literal': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-private-class-members': 'error',
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-template': 'error',
		'require-await': 'error',
		'no-constant-condition': ["error", { "checkLoops": false }],
		eqeqeq: ['error', 'smart'],

		// managed by prettier
		// indent: ['error', 'tab'],
		// 'linebreak-style': ['error', 'unix'],
		// quotes: ['error', 'single'],
		// semi: ['error', 'never'],
		// 'max-len': ['error', { code: 120, ignoreUrls: true }],
		// 'arrow-parens': ['error', 'as-needed'],
		// 'brace-style': ['error', 'stroustrup'],
		// 'comma-dangle': ['error', 'always-multiline'],
		// curly: ['error', 'multi-or-nest'],
	},
}

module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 11,
	},
	rules: {
		indent: [2, 'tab'],

		'no-tabs': 0,
		// windows linebreaks when not in production environment
		'linebreak-style': 0,
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		/* 'max-classes-per-file': 0, */
	},
};

module.exports = {
	"root": true,
	"env": {
		"es6": true,
		"node": true
	},
	"extends": [
		"plugin:vue/essential",
		"@vue/standard"
	],
	"rules": {
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"camelcase": [
			"error"
		]
	},
	"parserOptions": {
		parser: "babel-eslint"
	}
};

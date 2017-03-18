module.exports = {
    'root': true,
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'plugins': ['import'],
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'webpack.config.js',
            },
        },
    },
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'import/extensions': ['error', 'always', { 'js': 'never' }],
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'import/no-webpack-loader-syntax': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': ['error', { 'extensions': ['.react.js'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-bind': ['error', {
            'ignoreRefs': true,
            'allowArrowFunctions': true,
            'allowBind': false,
        }],
        'react/jsx-closing-bracket-location': ['error', {
            'nonEmpty': 'after-props',
            'selfClosing': 'tag-aligned',
        }],
        'react/forbid-prop-types': 'off',
    },
    'env': {
        'browser': true,
    },
}

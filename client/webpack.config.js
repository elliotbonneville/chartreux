var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'src/js/main.js'),
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader'],
                test: /\.js$/,
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader?name=[path][name].[ext]',
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false,
        //     },
        // }),
    ],
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery',
            '~': path.join(__dirname, './src/js'),
        },
    },
};

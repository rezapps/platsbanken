// webpack.prod.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './www/js/index.js',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    ],
    output: {
        filename: 'prod.min.js',
        path: path.resolve(__dirname, 'www/dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ]
            }
        ]
    }
};

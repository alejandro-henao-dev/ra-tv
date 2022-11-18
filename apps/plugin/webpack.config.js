const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                        options: { 
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                       }
                    },
                    'sass-loader'
                  ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx','.scss'],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001,
        hot: 'only',
        compress: true,
        open: false,
    },
};
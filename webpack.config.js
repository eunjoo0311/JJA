const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                                importSource: '@emotion/react',
                            },
                        ],
                    ],
                    plugins: ['@emotion/babel-plugin'],
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
            {
                test: /\.(png|jpe?g|gif|otf|woff2|woff)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        sideEffects: false,
        minimizer: [
            new ImageMinimizerPlugin({
                test: /\.(png|jpe?g|gif)$/,
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['imagemin-optipng', { optimizationLevel: 1 }],
                        ],
                    },
                },
            }),
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};

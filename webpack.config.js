module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js',
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
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@emotion'],
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
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};

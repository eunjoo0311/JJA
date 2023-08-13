module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
    },
};

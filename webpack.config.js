const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
    entry: {
        'landing': path.join(APP_DIR, 'index.jsx'),
        'blog': path.join(APP_DIR, 'blog.jsx'),
        'blogadmin': path.join(APP_DIR, 'blogadmin.jsx'),
        'blogadminlogin': path.join(APP_DIR, 'blogadminlogin.jsx'),
    },
    mode: 'development',
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle_[name].js',
    },
    resolve: {
        modules: ['node_modules', APP_DIR],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                },
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.mp4$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                    mimetype: 'video/mp4',
                },
            },
            {
                test: /\.webm$/,
                loader: 'url-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-react-loader',
            },
        ],
    },
    node: {
        fs: 'empty',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['landing'],
            filename: 'landing/index.ejs',
            template: '!!html-loader!client/src/template.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['blog'],
            filename: 'blog/index.ejs',
            template: '!!html-loader!client/src/template.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['blogadmin'],
            filename: 'blog/admin.ejs',
            template: '!!html-loader!client/src/template.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['blogadminlogin'],
            filename: 'blog/adminlogin.ejs',
            template: '!!html-loader!client/src/template.ejs',
        }),
    ],
};

module.exports = config;
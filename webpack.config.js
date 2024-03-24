const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        host: 'localhost',
        port: 8800,
        compress: true,
        historyApiFallback: true,
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        }
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: './src/views/index.hbs',
                signUp: './src/views/sign_up.hbs',
                signIn: './src/views/sign_in.hbs',
                forgotPassword: './src/views/forgot_password.hbs',
                post: './src/views/post.hbs',
                resetPassword: './src/views/reset_password.hbs',
                noticeList: './src/views/notice_list.hbs',
                noticeDetails: './src/views/notice_details.hbs',
                recentPost: './src/views/recent_post.hbs',
                recentPostDetails: './src/views/recent_post_details.hbs',
                account: './src/views/account.hbs',
                userInformation: './src/views/user_about.hbs',
                liveMatch: './src/views/match.hbs',
                matchDetails: './src/views/match_details.hbs'
            },
            preprocessor: 'handlebars',
            preprocessorOptions: {
                root: path.join(__dirname, 'src/views/'),
                partials: [
                    'src/views/partials',
                    path.join(__dirname, 'src/views/partials'),
                ],
                helpers: {
                    arraySize: (array) => array.length,
                },
            },
            loaderOptions: {
                root: path.join(__dirname, 'src'),
            },
            js: {
                filename: 'js/[name].js',
            },
            css: {
                filename: 'css/[name].css',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)/,
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|png|jp?g|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext][query]',
                },
            },
            {
                test: /\.(html|ejs|eta|hbs|handlebars|njk)$/i,
                loader: HtmlBundlerPlugin.loader,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                },
            }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};


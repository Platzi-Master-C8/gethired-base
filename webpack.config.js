const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, './src/components'),
            Constants: path.resolve(__dirname, './src/constants'),
            Pages: path.resolve(__dirname, './src/pages'),
            Styles: path.resolve(__dirname, './src/style')
        }
    },
    devServer: {
        port: '3000',
        hot: true,
        watchFiles: ["./src/**"]
    },

    optimization: {
        minimize: true,
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: false,
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    chunks: 'all',
                    name: "react-vendor",
                    filename: "assets/common.[chunkhash].js",
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 20,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    filename: 'assets/vendor.[chunkhash].js',
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 10,
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset",
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            // generateStatsFile: true,
            analyzerMode: 'disabled',
            generateStatsFile: true
        })
    ]
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    },
    css: {
        extract: {
            filename: '[name].css',
            chunkFilename: '[name].css'
        }
    },
    // pluginOptions: {
    //     'style-resources-loader': {
    //       preProcessor: 'scss',
    //       // load which style file you want to import globally
    //       patterns: [path.resolve(__dirname, './resources/scss/_mixins.scss')],
    //     },
    // },
    // module: {
    //     reles: [{
    //         test: /\.(woff|woff2|eot|ttf|svg)$/,
    //             use: {
    //             loader: 'url-loader',
    //             },
    //         },
    //         {
    //             test: /\.(s(a|c)ss)$/,
    //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    //             exclude: /node_modules/
    //         }
    //     ]
    // }
}
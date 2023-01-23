// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './index.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//     mode: 'development',
//   module:{
//     rules:[
//         {
//         test: /\.[tj]s$/,
//         use: 'ts-loader',
//         exclude: /node_module/
//         },
//         { test: /\.svg$/, use: 'svg-inline-loader' },
//         { test: /\.css$/, use: ['style-loader','css-loader']},
//         { test: /\.(js)$/, use: 'babel-loader' }
//     ]
//   },
//   resolve: {
//     exstensions:['.ts','.js'],
//   },
//   plugins:[
//    new HtmlWebpackPlugin({
//     title:'Demo',
//     template:'./index.html'
//    }),
//   ]
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
      },
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname)]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',            
        }),
    ],
}
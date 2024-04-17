const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = 'style-loader';

const config = {
    name: 'base',
    entry: {
        'styles': '@test-react/styles/src/index.css'
    },
    output: {
        path: path.resolve(__dirname, '../../dist/assets'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'modules': false
                                }
                            ], '@babel/preset-react'
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '...'],
        // Add the path to the directory containing React versions in packages
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules', // fallback to root node_modules
        ],
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.devtool = 'source-map';
    }
    return config;
};

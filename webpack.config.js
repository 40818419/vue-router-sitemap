const path = require('path');

module.exports = [
    {
        output:  {
            path:     path.resolve(__dirname, 'dist'),
            filename: 'index.js',
        },
        mode:    'development',
        module:  {
            rules: [
                {
                    test:    /\.js$/,
                    exclude: /node_modules/,
                    use:     {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        entry:   [
            './index.js',
        ],
        target: 'node',
        stats:   {
            colors: true,
        },
        devtool: 'source-map',
    },
];

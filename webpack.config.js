const path = require('path');

module.exports = {
    // Where to begin resolving modules and files
    entry: './src/index.js',
    output: {
        // name of the bundle file you want to create
        filename: 'bundle.js',
        // absolute path to place outputed bundle
        path: path.resolve(__dirname,'public', 'js'),
        // url direction relative to de index.html file
        // Output directly relative to the HTML file
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css?$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png)?$/,
                use:'url-loader'
            }
           
        ]
    },
    // This will automaticaly rebundle our bundle any time we make changes
     devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/js/',
        port:9090
    }
};
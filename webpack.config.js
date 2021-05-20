module.exports = {
    mode: 'development',
    entry: './main.js',
    devtool: 'source-map',
    output: {
        path: __dirname + "/dest",
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: "./public"
    }
};

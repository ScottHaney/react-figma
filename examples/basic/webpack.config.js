var configure = require('@scotthaney323/react-figma-webpack-config');

module.exports = configure({
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-figma$': '../../../src',
            'react-figma/rpc$': '../../../src/rpc'
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
      ]
});

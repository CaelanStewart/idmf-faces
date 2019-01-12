let mix = require('laravel-mix');

mix.sass('src/scss/idmf-faces.scss', 'dist')
    .js('src/js/idmf-faces.js', 'dist')
    .webpackConfig({
        resolve: {
            modules: [
                path.resolve(__dirname, 'src/js'),
                'node_modules'
            ],
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        },
        devtool: "source-map"
    });
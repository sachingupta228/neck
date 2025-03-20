const SystemBuilder = require('systemjs-builder');
const builder = new SystemBuilder();

builder.loadConfig(__dirname + '/../systemjs.config.js')
    .then(function(){
        const outputFile = '../demo/vendor/bundle.min.js';
        return builder.buildStatic('app', outputFile, {
            minify: true,
            mangle: true,
            rollup: true
        });
    })
    .then(function() {
        console.log('bundle built successfully!');
    });

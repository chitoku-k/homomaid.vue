define(['babel-standalone', 'babel-polyfill', 'http-vue-loader'], function (Babel, _, httpVueLoader) {
    return {
        load: function (name, req, onload, config) {
            httpVueLoader.httpRequest(req.toUrl(name) + ".js").then(function (script) {
                onload.fromText(Babel.transform(script, {
                    presets: [
                        'es2015',
                        'stage-3',
                    ],
                    plugins: [
                        'transform-es2015-modules-amd',
                    ],
                }).code);
            });
        },
    };
});

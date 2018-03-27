define(['babel-standalone', 'http-vue-loader'], function (Babel, httpVueLoader) {
    return {
        load: function (name, req, onload, config) {
            httpVueLoader.httpRequest(req.toUrl(name) + ".js").then(function (script) {
                onload.fromText(Babel.transform(script, {
                    presets: [
                        'es2017',
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

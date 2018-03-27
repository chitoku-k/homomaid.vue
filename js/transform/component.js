define(['babel-standalone', 'http-vue-loader'], function (Babel, httpVueLoader) {
    return {
        load: function (name, req, onload, config) {
            httpVueLoader.langProcessor.babel = function (script) {
                return Babel.transform(script, {
                    presets: [
                        'es2017',
                        'stage-3',
                    ],
                    plugins: [
                        'transform-es2015-modules-amd',
                    ],
                }).code.replace(/define\(/, 'define("' + name + '", ');
            };

            httpVueLoader(req.toUrl(name) + ".vue", name)().then(onload);
        },
    };
});

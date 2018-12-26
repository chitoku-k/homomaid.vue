define(['babel-standalone', 'http-vue-loader'], function (Babel, httpVueLoader) {
    httpVueLoader.scriptExportsHandler = function (script) {
        return new Promise(function (resolve) {
            require([ this.component.name ], function (component) {
                resolve(component.default);
            });
        }.bind(this));
    };

    // See: https://babeljs.io/docs/en/options#source-map-options
    httpVueLoader.langProcessor.babel = function (script) {
        return Babel.transform(script, {
            moduleId: this.name,
            sourceFileName: this.name.substr(this.name.lastIndexOf('/')) + '.vue',
            sourceMaps: 'inline',
            sourceRoot: this.baseURI,
            presets: [
                'es2015',
                'stage-3',
            ],
            plugins: [
                'transform-es2015-modules-amd',
            ],
        }).code;
    };

    return {
        load: function (name, req, onload, config) {
            httpVueLoader(req.toUrl(name) + '.vue', name)().then(onload);
        },
    };
});

define(['babel-standalone'], function (Babel) {
    return {
        load: function (name, req, onload, config) {
            fetch(req.toUrl(name) + ".js").then(function (x) {
                return x.text();
            }).then(function (x) {
                return Babel.transform(x, {
                    presets: [
                        'es2017',
                        'stage-3',
                    ],
                    plugins: [
                        'transform-es2015-modules-amd',
                    ],
                }).code;
            }).then(function (x) {
                return onload.fromText(x);
            });
        },
    };
});

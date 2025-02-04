module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "firefox": "60",
                    "chrome": "60",
                },
                "useBuiltIns": "usage",
                "corejs": "3.40"
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-proposal-throw-expressions'
    ];

    return {
        presets,
        plugins
    };
}
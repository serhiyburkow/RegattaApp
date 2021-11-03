module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@app': './src',
                        '@components': './src/core/components',
                        '@constants': './src/constants',
                        '@assets': './assets',
                        '@modules': './src/modules',
                        '@core': './src/core',
                        '@config': './src/config',
                    },
                },
            ],
        ],
    };
};

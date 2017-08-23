require.config({
    paths: {
        low: '../../bower_components/lodash/dist/lodash'
    },
    shim: {
        low: {
            export: '_'
        }
    }
});

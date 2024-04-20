// Custom configuration to force the use of React 18.x

const path = require("path");

module.exports = {
    name: 'main',
    extends: path.resolve(__dirname, './base.js'),
    entry: {
        'react-vendors': ['react-18', 'react-dom-18'],
        'react-18-app': {
            import: '@test-react/react-18-app',
            dependOn: 'react-vendors'
        },
    },
    resolve: {
        alias: {
            // Alias for all packages that use React version 18.x
            'react': 'react-18',
            'react-dom': 'react-dom-18',
        },
    }
};

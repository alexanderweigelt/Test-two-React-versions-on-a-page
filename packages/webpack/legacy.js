// Custom configuration to force the use of React 16.x

const path = require('path');

module.exports = {
    name: 'legacy',
    extends: path.resolve(__dirname, './base.js'),
    entry: {
        'react-16-app': '@test-react/react-16-app',
    },
    resolve: {
        alias: {
            // Alias for all packages that use React version 16.x
            'react': 'react-16',
            'react-dom': 'react-dom-16',
        },
    }
};

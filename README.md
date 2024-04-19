# Managing Multiple React Versions in a Monorepo with Webpack

## Introduction
In this case study, we explore the challenges and solutions for managing multiple versions of React within a monorepo using Webpack. We'll cover the background of the project, the task at hand, the implemented solution, and the rationale behind our approach.

## Background
Our project initially consisted of a React application utilizing React 16.x along with other dependencies. However, the need arose to introduce new React applications developed with React 18.x alongside the existing ones. We aimed to ensure the smooth coexistence of both versions within the same environment without causing conflicts.

## Task
The primary task was to enable the development and deployment of new React 18.x applications while maintaining the existing React 16.x applications. We needed to ensure that each application could run independently without interference. Additionally, we aimed to establish a modern monorepo architecture to streamline development and maintenance processes.

## Solution Approach

To achieve our objectives, we adopted a comprehensive solution approach:

### Monorepo Architecture: 

We structured the project as a monorepo to facilitate the management of multiple applications and shared codebases within a single repository. This allowed for efficient code sharing, dependency management, and cross-project refactoring.

### Dependency Management:

We managed package dependencies within the monorepo, ensuring the inclusion of both React 16.x and React 18.x dependencies. This involved careful management of npm installation behavior to avoid conflicts and ambiguity in module resolution.

To ensure that the correct React versions are included in the bundle according to the aliases defined in our Webpack configuration, we must install the corresponding React packages with aliases in our project.

```
// In packages/webpack/package.json
{
    "dependencies": {
        "react-16": "npm:react@16.14.0",
        "react-dom-16": "npm:react-dom@16.14.0",
        "react-18": "npm:react@^18.2.0",
        "react-dom-18": "npm:react-dom@^18.2.0"
    },
}
```

In our Webpack configuration, we define aliases to map imports of React-related packages (react and react-dom) to specific versions based on the application being bundled. For example, in legacy.js for React 16.x applications and main.js for React 18.x applications.

In our package.json, we have defined dependencies for React 16 and 18 versions with aliases (react-16, react-dom-16, react-18, react-dom-18). These dependencies point to specific versions of React packages installed from npm.

When Webpack encounters import statements for React-related packages, it replaces them with the corresponding aliases specified in the configuration. For example, import React from 'react' is replaced with import React from 'react-16' or import React from 'react-18' depending on the configuration.

### Webpack Configuration: 

We configured Webpack 5 to handle both React 16.x and React 18.x applications by defining separate configurations for each version. These configurations included aliasing, resolve options, and custom settings tailored to the specific requirements of each application.

1. **Webpack Configuration Files**

    We created separate Webpack configuration files for React 16.x and React 18.x applications. These files, namely main.js and legacy.js, allowed us to customize the bundling process for each React version.

2. **Resolve Aliases**

   One key strategy we employed was aliasing in the Webpack configuration. We defined aliases to map imports of React-related packages (react and react-dom) to the appropriate versions based on the application being bundled.
   These aliases ensured that import statements for React and ReactDOM were resolved to the correct versions specified for each application.

    For example:
```js
// In packages/webpack/legacy.js for React 16.x applications
alias: {
  'react': 'react-16',
  'react-dom': 'react-dom-16',
}
```
```js
// In packages/webpack/main.js for React 18.x applications
alias: {
    'react': 'react-18',
    'react-dom': 'react-dom-18',
}
```
  
3. **Resolve Modules**

    We utilized Webpack's resolve.modules option to specify additional directories to search for modules. This allowed us to ensure that Webpack would look into the node_modules directories within the package folders (packages/react-16/node_modules and packages/react-18/node_modules) to resolve package dependencies.
   By adding the package directories to the module resolution paths, we ensured that Webpack would prioritize the React versions installed within these directories over the root node_modules.
```js
// In packages/webpack/base.js (shared configuration)
resolve: {
    modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules',
    ],
}
```

### Scripts and Automation: 

We provided npm scripts to facilitate building both React 16.x and React 18.x applications separately. These scripts invoked the respective Webpack configurations for production and development builds, streamlining the build process.

## Conclusion
Through the adoption of a monorepo architecture and meticulous configuration of Webpack, we successfully managed the coexistence of multiple React versions within the project environment. By maintaining separate configurations and managing dependencies effectively, we ensured the independence and compatibility of applications developed with different React versions.

The implemented solution enables seamless development, testing, and deployment of both legacy and modern React applications, laying a solid foundation for future expansion and maintenance efforts. With the combination of monorepo practices and Webpack customization, we established a robust framework for managing complex projects with diverse dependencies and requirements.

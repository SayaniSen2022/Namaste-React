# What is npm?

- npm is world's largest software registry and contains around 800,000 code packages. It is also a package manager and installer (installed with Node). npm is free to use. npm includes a CLI that can be used to download and install software. All npm packages are defined in the package.json file. npm can manage the dependencies which are also defined in the package.json file.

# What is parcel/webpack ? Why do we need it?

1. Parcel is a 0 configuartion build tool. It acts like a manager for the packages we use in our application. It provides us with multiple features such as:
   - Dev server
   - Caching
   - HMR
   - Diagnostics: If we make an error in our code or configuration, Parcel displays beautiful diagnostics in our terminal and in the browser.
   - Its fast: Parcel builds our code in parallel using worker threads, utilizing all of the cores on our machine. Everything is cached, so we never build the same code twice.
   - Tree shaking
   - Minification
   - Image optimization
   - Compression
   - Code splitting
   - Content hashing
   - Transpilation
   - Differential Bundling
2. Webpack: It is a free and open-source static module bundler for modern JavaScript applications. It can also transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.

- We need bundlers like Parcel/webpack because they help in minifying our code, making it clean and compact. It optimises our code's performance and make it production ready.

# What is ".parcel-cache"?

- .parcel-cache folder is where parcel keeps storing information about our project when parcel builds it, so that when it rebuilds, it does not have to re-parse and re-analyse everything from scratch. Thus takes lesser time to reload on subsequent refreshes. Even if we delete the folder, it can be re-generated every time we run the 'parcel index.html' command for the first time. This is the reason why Parcel can be very fast in development mode.

# What is npx?

- npx means node package is being executed. It is a npm package runner. Ir allows developers to execute any JS package available on the npm registry without even installing it.npx is installed automatically with npm version 5.2.0 and above.

# What is the difference between dependencies abd devDependencies ?

- Dependency: Packages that are required for our application to run correctly in a production environment. These packages are essential for the proper functioning of our application when it is deployed or used by end-users. Dependencies are installed when we run the application or when we deploy it to a production server.
- devDependencies: Packages that are only required for the development and build processes. These packages include development tools, testing frameworks, transpilers, linters, and other utilities that assist us during the development and build phases of our project. DevDependencies are not installed when our application is deployed or used in a production environment. They are meant to be used during development, testing, or building the project. Including them in devDependencies ensures that these development tools and dependencies are not included in the production bundle, reducing its size and improving performance.

# What is Tree Shaking?

- Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files. The term "tree shaking" is derived from the concept of "shaking" the dependency tree of a JavaScript application to remove unnecessary branches or leaves.
- The primary goal of tree shaking is to reduce the size of the JavaScript bundle sent to the browser, improving the application's loading time and overall performance.

# What is Hot Module Replacement?

- Hot Module Replacement is a very useful feature provided by some JS bundlers including webpack. It optimises the development experience as HRM allows to update code of a running application without triggering a full page reload or losing the current state of the application. Thus reduces the development time and makes it easier to debug and test code. With HMR, when a developer makes changes to the source code, the updated modules (components, styles, or other assets) are patched and injected into the running application without requiring a complete page refresh. This means that you can see the changes immediately in the browser without losing the current state of the application or going through the entire reload process.

# List down your 5 favourite superpowers of parcel and describe 3 of them in your own words.

- HMR
- Caching
- Code splitting
- Tree shaking
- Diagnostics

1. HMR: Allows automatic updates in our code in the browser whenever we make any change. No page reload necessary.

2. Diagnostics: If we make an error in our code or configuration, Parcel displays beautiful diagnostics in the terminal and in the browser. Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue. Many diagnostics even include a documentation link where we can learn more.

3. Caching: Everything Parcel does is cached – transformation, dependency resolution, bundling, optimizing, and everything in between. This means the dev server restarts instantly, and the same code is never built twice.

# What is ".gitignore"? What should we add and not add into it?

- A .gitignore file is a text file placed in a git repository that tells git not to track certain files and folders that we don't want being uploaded to our master repository.
- We should add all the files that can be regenerated in the .gitignore file such as the node modules folder, the .parcel-cache folder.
- We should never add package.json or package-lock.json inside the .gitignore.

# What is the difference between package.json and package-lock.json?

- package.json: Contains metadata and a list of our project's dependencies and devDependencies. Used for managing and defining the project's dependencies.

- package-lock.json: Serves as a lockfile, recording the exact versions of the installed dependencies and their transitive dependencies. Ensures consistent and deterministic installations across different environments.

# Why should I not modify package-lock.json?

- package-lock.json serves as a lockfile and records the exact version of the dependencies and their transitive dependencies so that installations remain consistent across different environments. If we make changes to it then the consistency will be affected.

# What is node_modules? Is it a good idea to push it to git?

- node_modules folder is like a cache for the external modules that our project depends upon. When we npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when we import them (without a specific path).

- No, it can be regenerated with a simple npm install command. There is no need to push it to git and make the code unnecessarily heavy.

# What is the dist folder?

- The dist folder is a short form for distribution folder. It is the build folder which contains all the files and folders which can be hosted in server.

# What is browserslist?

- Browserslist is a tool that allows specifying which browsers should be supported in our frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

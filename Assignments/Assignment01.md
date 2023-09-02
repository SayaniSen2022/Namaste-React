# What is Emmet?

- Emmet is a free plug-in for our text-editors. It provides shortcuts which expand to full pieces of code. Thus helps developers save on time and keystrokes. Also relying on Emmet's autocorrection means lesser typos, missing tags, leading to more robust and valid files.

# Difference between library and framework?

- Libraries and frameworks are both pre-written pieces of code which helps us solve common problems efficiently. When we use libraries we don't have to built from scratch but we have liberty and control of choosing what we want to use.The flow of application lies in our hand. But frameworks do not give us that liberty. They have a limited number of options from which we have to choose and also instructs us on when and where to put our inputs. Thus the flow of application is controlled by the framework but our code is needed.

# What is CDN? Why do we use it?

- CDN stands for Content Delivery/Distributed Network. It is a network of interconnected servers which helps in reducing page load time of data-heavy applications. We use CDN to reduce network latency.

# What is React? Why is it called React?

- React is a JS library used to create UIs, dynamic web applications as well as reusable, composable components that can be used in different applications.

- React supports component architecture and reactive updates. When a component is first initialised, the render method is called and it creates a lightweight representation of our view (Virtual DOM). From that representation a string of markup is produced, and injected into the document. Whenever there is a change in data, the component is re-rendered and React diff the return value from the previous call to update as efficiently as possible. Thus in general a minimal set of changes is applied to the DOM with no requirement for page refresh. This is known as reconciliation, it is very fast (aroun 1ms for TodoMVC) and developers need not specify data bindings.

# What is crossorigin in the script tag?

- The crossorigin attribute sets the mode of the request to a HTTP CORS request. CORS stand for Cross Origin Resource Sharing, a mechanism to allow resources on a web page to be requested from another domain outsidetheir own domain.

# What is the difference between React and ReactDOM?

- React is a JS library used to create UIs, dynamic web applications as well as reusable, composable components that can be used in different applications.

- ReactDOM is a part of the React library, it is used to render components and React elements on the web. The react-dom/server APIs let us render React components to HTML on the server. These APIs are only used at the top level of our apps to generate the initial HTML.

# What is the difference between react.development.js and react.production.js files via CDN?

- One provides the development build and one provides the production build.

1. Development build:
   - slow
   - Generates source map files for CSS, help devleopers debug code about original files.
   - Hot Module Replacement
   - Debugger
   - Creates a single bundle.js file
   - React DevTools
   - React DevTools profiler
2. Production build:
   - Faster for running code on client's browser
   - Separate bundle files for app and vendor
   - Minification and compression of JS and HTML resources to reduce file size
   - Source map can be disabled at runtime to reduce the size of the code
   - Gzipping code to compress and reduce size

# Difference between async and defer?

- Both async and defer allows the browser to continue parsing the HTML document while JS files are being downloaded.
- Async downloads and executes the JS as soon as the JS files become available.
- Defer waits until the HTML doc has been parsed before downloading and executing external scripts.

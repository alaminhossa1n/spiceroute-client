import React from 'react';


const Blog = () => {
    const handleDownload = () => {
        console.log('object');
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold mb-4">Some Questions And Answer</h1>
                <button onClick={handleDownload} className='btn border-none'>Download PDF</button>
            
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-violet-600">Differences between uncontrolled and controlled components</h2>
                    <p>
                        <strong>Uncontrolled components:</strong> are ones that manage their own state internally and update it in response to user actions. They do not rely on React state to manage their data. This means that the component itself controls the state and the parent component cannot access or modify it directly. Uncontrolled components are typically used for simple form elements like text inputs, checkboxes, and radio buttons.
                    </p>
                    <br />
                    <p>
                        <strong>Controlled components: </strong>, on the other hand, rely on React state to manage their data. The parent component passes down a value and an onChange function to the controlled component as props. The controlled component then updates its state and notifies the parent component of any changes via the onChange function. This allows the parent component to have full control over the state of the child component and can be useful for more complex forms.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-violet-600">How to validate React props using PropTypes</h2>
                    <p>
                        PropTypes is a built-in library in React that provides a way to specify the type of data that a component should receive as props. It is useful in ensuring that the data passed to a component is of the correct type and format, thus reducing the chances of errors and bugs in the application.
                    </p>
                    <br />
                    <p>To use PropTypes, you first need to import the library from the 'prop-types' package. Then, you can specify the type of data that a prop should be using the PropTypes properties such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. You can also specify that a prop is required using the PropTypes.isRequired property.</p>
                    <br />
                    <p>PropTypes are defined as static properties of the component class, so you can use them to validate the props being passed to the component. When a prop is passed that doesn't match the expected type or is missing a required prop, a warning message is logged to the console.</p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-violet-600">Difference between nodejs and express js.</h2>
                    <p>
                        <strong>Node.js</strong> is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, outside of a browser environment. Node.js provides a set of built-in modules that enable developers to create web servers, interact with the file system, perform networking, and more.
                    </p>
                    <br />
                    <p>
                        <strong>Express.js</strong> on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and template rendering. Express.js is designed to be flexible and minimalistic, allowing developers to create web applications in a variety of styles, from small and simple to large and complex.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-violet-600">What is a custom hook, and why will you create a custom hook?</h2>
                    <p>
                        In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks are created using the useEffect and useState hooks, and can be used to handle complex logic such as data fetching, managing forms, or handling browser events.
                    </p>
                    <br />
                    <p>
                        Creating a custom hook can help reduce code duplication and make your code more readable and maintainable. For example, if you find yourself repeating the same code to fetch data from an API in multiple components, you could create a custom hook that handles the data fetching logic and returns the data to the components.
                    </p>
                    <br />
                    <p>
                        Custom hooks can also be used to abstract away complex logic from components and make them more focused on rendering UI elements. This can help make your components more modular and easier to test.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;
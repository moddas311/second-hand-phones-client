import React from 'react';

const Blog = () => {
    return (
        <div>

            <h2 className='text-3xl font-bold text-center text-sky-500 py-5'>Welcome to my Blog!</h2>

            <div className='grid my-10 gap-10 grid-cols-1 md:grid-cols-2'>
                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-red-500">What are the different ways to manage a state in a React application?</h2>
                        <p>
                            <small className='text-blue-600'>
                                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                                Sometimes state we think should be local might become global.                       Server state – Data that comes from an external server that must be integrated with our UI state.
                                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                                Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                                URL state – Data that exists on our URLs, including the pathname and query parameters.
                                URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                            </small>
                        </p>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <div className="card-body text-red-500">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>
                            <small className='text-blue-600'>
                                Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.
                                Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues. See details here [http://www.2ality.com/2011/11/javascript-classes.html].
                                So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                                Below is a sample code with comments and caption to better see how it works:
                                After going through the code, its best to read further about Prototypal Inheritance from mozilla doc. Code example below is just one of many ways of implementing Prototypal Inheritance.
                            </small>
                        </p>
                    </div>
                </div>
                <div className="card shadow-xl text-red-500">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p>
                            <small className='text-blue-600'>
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
                                Unit testing ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                            </small>
                        </p>
                    </div>
                </div>
                <div className="card shadow-xl text-red-500">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p>
                            <small className='text-blue-600'>
                                Angular, React, and Vue are all under very active development. They regularly release new versions and maintain the existing ones. As the current level of support is high in each case, you can safely use any of these frameworks.
                                It’s important to note that Angular is not growing as fast as before, while Vue — even though it started more recently — seems to be growing a lot.
                                As previously stated, we can’t predict which frameworks will remain relevant in the long term, but each project has a great community behind it and is constantly evolving.
                                My goal with this article was to explain the architectural differences, break down each framework’s strengths and weaknesses, and compare them wherever it’s applicable.
                                Before jumping into a new framework, there are a few things to consider.
                                First, your team’s experience can be a deciding factor when choosing a new technology.
                                Similarly, you have to consider the talent that is available in your area so that you can hire developers for your project.
                                Finally, when it comes to the project itself, the complexity and scope can also affect your choice of framework.
                                By taking into account all the key differences, I hope you can decide which is the best front-end framework for your goals and needs.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
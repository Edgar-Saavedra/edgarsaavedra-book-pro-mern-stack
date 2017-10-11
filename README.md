# edgarsaavedra-book-pro-mern-stack
Working along side the book Pro Mern Stack

see [book repo](https://github.com/vasansr/pro-mern-stack)

# Chapter 3 notes

* React classes let us create real components (as opposed to the templated HTML that we saw in the previous chapter),
  reuse them within other components, handle events, and so much more.
* Ideally, components should be isolated into their own files so that they can be reused.
* You can pass data from a parent to a child component in different ways. One way to do this is using properties.
* Any data passed in from the parent can be accessed in the child component through a special variable, this.props.
* You can pass not only strings but also JavaScript objects and other data types. In fact, any JavaScript expression can be passed along by using curly braces ({}) instead of quotes
* Inline styles in react need to be camelCased ```{borderWidth:"1px",borderStyle:"solid",borderColor: "silver",padding:6}```
* the properties being passed from one component to another can also be validated against a specification
  *  supplied in the form of a static object called propTypes
  * Property validation is checked only in development mode, and a warning is shown in the console when any validation fails.

Functional Component vs Class Component


The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

A class component requires you to extend from React.Component and create a render function which returns a React element.
The simplest way to define a component in React is to write a JavaScript function:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

It’s just a function which accepts props and returns a React element.This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Both versions are equivalent and will give you the exact same output.
Now you might ask yourself: “When should I use a function and when a class?”


A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits which you will see later on.
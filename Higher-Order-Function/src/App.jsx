import React from 'react';

// Higher-order component function
const withColor = (WrappedComponent, color) => {
  return (props) => {
    return <WrappedComponent {...props} color={color} />;
  };
};

// Component 1: Button
const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.children}
    </button>
  );
};

// Component 2: Input
const Input = (props) => {
  return (
    <input
      type="text"
      style={{ borderColor: props.color }}
      placeholder={props.placeholder}
    />
  );
};

// Component 3: App (with HOC applied)
const App = () => {
  const ButtonWithColor = withColor(Button, 'blue');
  const InputWithColor = withColor(Input, 'green');

  return (
    <div>
      <ButtonWithColor>Click Me</ButtonWithColor>
      <InputWithColor placeholder="Enter text" />
    </div>
  );
};

export default App;

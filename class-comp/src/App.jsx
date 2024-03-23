import React from 'react';
import Name from './Name';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"Takuma",
    };

    // Binding the increment method to the current context
    this.increment = this.increment.bind(this);
    this.handleChange=this.handleChange.bind(this)
  }

  increment() {
    this.setState((prev) => {
      return {
        count:prev.count+2
      };
    });
  }

  handleChange(e){
this.setState({
  name:e.target.value,
})
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <Name name="Kazuma"/>
      </div>

      
    );
  }
}

export default App;

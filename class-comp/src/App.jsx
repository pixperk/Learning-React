import React from "react";
import Name from "./Name";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // Binding the increment method to the current context
    this.increment = this.increment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* componentDidMount(){
   setTimeout(() => {
    console.log("Fetched");
   }, 2000);
  }

  shouldComponentUpdate(){
    return true
  }

  componentDidUpdate(){
console.log("Fetched Again");
  }

  componentWillUnmount(){
    console.log("Unmounting");
  }
 */
  increment() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  state = {
    name: "Long",
  };

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

export default App;

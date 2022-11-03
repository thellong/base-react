import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  state = {
    name: "Long",
    age: 20,
  };

  clickHandle(event) {
    console.log("My name is: ", this.state.name, "and I'm ", this.state.age);

    // merge state => react class
    this.setState({
      name: "Vippro",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  render() {
    return (
      <div>
        Hello {this.state.name} I'm {this.state.age}
        <button
          onClick={(event) => {
            this.clickHandle(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;

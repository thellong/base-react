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

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        Hello {this.state.name} I'm {this.state.age}
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.onChange(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";
import AddUserInfor from "./components/AddUserInfor";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <MyComponent />
      </div>
    );
  }
}

export default App;

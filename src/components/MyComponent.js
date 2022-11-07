// Class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Le Van Long", age: 15 },
      { id: 2, name: "Ngo Bao Chau", age: 50 },
      { id: 3, name: "Albert Einstein", age: 70 },
    ],
  };

  addNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  // JSX cho phep viet code js trong code html
  render() {
    return (
      <div>
        <AddUserInfor addNewUser={this.addNewUser} />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;

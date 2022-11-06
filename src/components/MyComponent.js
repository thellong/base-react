// Class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Le Van Long", age: 20 },
      { id: 2, name: "Ngo Bao Chau", age: 50 },
      { id: 3, name: "Arb Einstern", age: 70 },
    ],
  };

  // JSX cho phep viet code js trong code html
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;

// Class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  // JSX cho phep viet code js trong code html
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Long pro vcl." age="20" />
      </div>
    );
  }
}

export default MyComponent;

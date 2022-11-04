// Class component
// function component

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  // JSX cho phep viet code js trong code html
  render() {
    return (
      <div>
        <UserInfor />
      </div>
    );
  }
}

export default MyComponent;

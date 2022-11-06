import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        Display Information of user
        <div>My name is {name}</div>
        <div>Im {age}.</div>
      </div>
    );
  }
}

export default DisplayInfor;

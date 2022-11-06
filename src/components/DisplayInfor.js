import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // const { name, age } = this.props;
    // console.log(this.props.listUsers);
    const listUsers = this.props.listUsers;
    return (
      <div>
        Display Information of user
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>I'm {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;

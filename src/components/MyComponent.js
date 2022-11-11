// Class component
// function component

import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
/*
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Le Van Long", age: 20 },
      { id: 2, name: "Ngo Bao Chau", age: 50 },
      { id: 3, name: "Abert Einstein", age: 70 },
    ],
  };

  addUserInfor = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  removeUserInfor = (userId) => {
    // let listUsersClone = [...this.state.listUsers];
    // listUsersClone = listUsersClone.filter((user) => user.id !== userId);
    // this.setState({
    //   listUsers: listUsersClone,
    // });

    this.setState({
      listUsers: this.state.listUsers.filter((user) => user.id !== userId),
    });
  };

  // JSX cho phep viet code js trong code html
  render() {
    return (
      <div>
        <AddUserInfor addUserInfor={this.addUserInfor} />
        <br />
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          removeUserInfor={this.removeUserInfor}
        />
      </div>
    );
  }
}
*/

const MyComponent = (props) => {
  const listUserDefault = [
    { id: 1, name: "Le Van Long", age: 20 },
    { id: 2, name: "Ngo Bao Chau", age: 50 },
    { id: 3, name: "Abert Einstein", age: 70 },
  ];

  const [listUsers, setListUsers] = useState(listUserDefault);

  const addUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const removeUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((user) => user.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <div>
      <AddUserInfor addUser={addUser} />
      <br />
      <br />
      <DisplayInfor listUsers={listUsers} removeUser={removeUser} />
    </div>
  );
};
export default MyComponent;

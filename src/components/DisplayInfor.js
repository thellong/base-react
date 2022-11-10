import React, { useState } from "react";
import "./scss/DisplayInfor.scss";
/*
class DisplayInfor extends React.Component {
  render() {
    // const { name, age } = this.props;
    // console.log(this.props.listUsers);
    const listUsers = this.props.listUsers;
    return (
      <div className="display-infor-container">
        Display Information of user
        <br />
        <button
          onClick={() => {
            this.hideShow();
          }}
        >
          {this.state.isShow === true ? "Hide" : "Show"}
        </button>
        {true && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name is {user.name}</div>
                    <div>I'm {user.age}</div>
                  </div>
                  <div>
                    <button onClick={() => this.props.removeUserInfor(user.id)}>
                      Remove
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
*/

const DisplayInfor = (props) => {
  const listUsers = props.listUsers;
  // useState sẽ trả về 2 giá trị,
  //1 là state,
  //2 là hàm được sử dụng để cập nhật state đó.
  const [isShowListUser, setShowListUser] = useState(true);

  const handleClickShowListUser = () => {
    // Hàm này là giá trị thứ 2 được trả về từ hàm useState.
    setShowListUser(!isShowListUser);
  };

  return (
    <div className="display-infor-container">
      Display Information of user
      <div>
        <span onClick={() => handleClickShowListUser()}>
          {isShowListUser === true ? "Hide list user" : "Show list user"}
        </span>
      </div>
      <br />
      {isShowListUser && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.removeUserInfor(user.id)}>
                    Remove
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;

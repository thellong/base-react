import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };

  hideShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    // const { name, age } = this.props;
    // console.log(this.props.listUsers);
    const listUsers = this.props.listUsers;
    return (
      <div>
        Display Information of user
        <br />
        <button
          onClick={() => {
            this.hideShow();
          }}
        >
          {this.state.isShow === true ? "Hide" : "Show"}
        </button>
        {this.state.isShow && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age}</div>
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

export default DisplayInfor;

import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    age: "",
  };

  clickHandle(event) {
    console.log("My name is: ", this.state.name, "and I'm ", this.state.age);

    // merge state => react class
    this.setState({
      name: "Vippro",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addUserInfor({
      id: Math.floor(Math.random() * 100 + 1) + "-id",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        Hello {this.state.name} I'm {this.state.age}
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.onChangeName(event);
            }}
          />
          <br />
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.onChangeAge(event);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;

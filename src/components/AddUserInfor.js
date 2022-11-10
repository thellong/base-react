import React, { useState } from "react";

/*
class AddUserInfor extends React.Component {
  state = {
    name: "",
    age: "",
  };

  clickHandle() {
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
*/

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.addUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: name,
      age: age,
    });
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      Hello {name} I'm {age}
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            onChangeName(event);
          }}
        />
        <br />
        <input
          value={age}
          type="text"
          onChange={(event) => {
            onChangeAge(event);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;

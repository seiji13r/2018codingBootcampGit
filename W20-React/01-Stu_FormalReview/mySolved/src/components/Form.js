import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // console.log(event.target);
    // const value = event.target.value;
    // const name = event.target.name;
    const {name, value} = event.target

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Hello ${this.state.username} you type this password ${this.state.password}`);

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;

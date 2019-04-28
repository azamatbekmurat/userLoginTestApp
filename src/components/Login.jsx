import React, { Component } from "react";
import { Link } from "react-router-dom";
import Welcome from "./WelcomeUser";

class Login extends Component {
  state = {
    users: null,
    email: "",
    password: "",
    toWelcome: false
  };

  async componentDidMount() {
    const result = await fetch("http://localhost:61080/api/users");

    const users = await result.json();

    this.setState({ users });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const users = this.state.users;
    const email = this.state.email;
    const password = this.state.password;
    if (users[email] === password) {
      this.setState({ toWelcome: true });
    } else {
      alert("Wrong User or Password!");
    }
  };

  render() {
    if (this.state.toWelcome === true) {
      return (
        <Link to={"/welcome"}>
          <Welcome user={this.state.email} />
        </Link>
      );
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

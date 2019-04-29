import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import WelcomeUser from "./WelcomeUser";
import { fetchUsers } from "../store/actions/actionTypes";

// component where end-user enters email and password, and navigates to welcome page in case of successful validation
class Login extends Component {
  //state where users for data of users extracted with API call
  //email and password for keeping values entered and submitted on the form
  //isLoggedIn to check if email and password values match the users from API
  state = {
    users: null,
    email: "",
    password: "",
    isLoggedIn: false
  };

  //initializing fetchUsers() method after component is rendered to extract users with API call
  componentDidMount() {
    this.props.fetchUsers();
  }

  // method to handle changes being made on input fields of a form
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // method to handle submit form event. In this method, users received with API call being
  // compared with input values such as email and password.
  handleSubmit = e => {
    e.preventDefault();
    //console.log("props", this.props.users);
    //console.log("state", this.state);

    //users from API call saved under users const
    const users = this.props.users;

    // email address entered on the page
    const email = this.state.email;

    // password entered on the page
    const password = this.state.password;

    // since users saved under dictionary, password of users from API is retrieved by passing email as a key.
    //And value of password from API is being compared with a value entered by end-user on the page
    if (users[email] === password) {
      this.setState({ isLoggedIn: true });
    } else {
      //in case email or password are wrong, our page return alert message
      alert("Wrong User or Password!");
    }
  };

  render() {
    // when isLoggedIn changes to 'true', app redirects to welcome component
    if (this.state.isLoggedIn === true) {
      return (
        <Link to={"/welcome"}>
          <WelcomeUser user={this.state.email} />
        </Link>
      );
    }

    //when user clicks 'Login', app returns Sign In form
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

// method to extract users from the store
const mapStateToProps = (state = {}) => ({
  users: state.users
});

// connect method to connect Login component with redux
export default connect(
  mapStateToProps,
  { fetchUsers }
)(Login);

import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import history from 'history/browser';
import { createBrowserHistory } from "history";
import LoginMain from "./LoginMain";

class AMS extends Component {
  render() {
    return (
      <div className="AMS">
        <Router>
          <>
            <Routes>
              <Route path="/" exact element={<Login />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/loginmain" element={<LoginMain />} />
              <Route path="*" element={this.ErrorComponent} />
            </Routes>
          </>
        </Router>

        {/* <Login />
                <Welcome /> */}
      </div>
    );
  }

  ErrorComponent() {
    return (
      <div className="Error">
        An Error Occured. I don't know what to do! Contact support at 7204929848
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    const history = createBrowserHistory();
    if (this.state.username === "in28minutes" && this.state.password === "a") {
      this.history("/welcome");
      console.log("Success");
      // this.setState({ showSuccessMessage: true })
      // this.setState({ hasLoginFailed: false })
    } else {
      console.log("Failed");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  // handleUsernameChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //         username: event.target.value
  //     })
  // }

  // handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //         password: event.target.value
  //     })
  // }

  render() {
    return (
      <div className="Login">
        {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed} />*/}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {/*<ShowValidCredential showSuccessMessage={this.state.showSuccessMessage} />*/}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        Username:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

// function ShowInvalidCredential(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }

// function ShowValidCredential(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null;
// }

class Welcome extends Component {
  render() {
    return <div className="Login">Welcome</div>;
  }
}

// class ErrorComponent extends Component {
//     render() {
//         return (

//             <div className="Error">
//                 An Error Occured. I don't know what to do! Contact support at 7204929848
//             </div>
//         )
//     }
// }
export default AMS;

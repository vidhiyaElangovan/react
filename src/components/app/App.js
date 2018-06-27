import React, { Component } from 'react';
import '../../assets/css/App.css';
import Popup from '../popup/popup';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      key:''
    };
  }
  signUp(){
    this.setState({
      showPopup: !this.state.showPopup,
      key:"Sign Up"
    });
  }
  login(){
    this.setState({
      showPopup: !this.state.showPopup,
      key:"Login"
    });
  }
  submit(data){
    if(this.state.key !== "Login"){
      if(data[0].pass !== data[0].cpass)
      {
        alert("passwords doesnt match");
      }else {
        alert("Continue login");
        localStorage.setItem("loggedInDetails", JSON.stringify(data));
        this.signUp();
      }
    }
    else{
      var retrievedData = localStorage.getItem("loggedInDetails");
      var userData = JSON.parse(retrievedData);
      if(data[0].pass === userData[0].pass && data[0].email === userData[0].email){
        alert("succesfully logged in");
        this.props.history.push("/dashboard");
        this.signUp();
      }else{
        alert("please check your credentials");
      }
      
    }
  }
  render() {
    return (
      <div className="App">
        <h1>welcome</h1>
        <button type="button" className="btn btn-primary" onClick={this.signUp.bind(this)}>Sign up</button>
        <button type="button" className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
        <img alt="" src={require('../../assets/images/1.jpg')} />
        {this.state.showPopup ? 
          <Popup
            text={this.state.key}
            closePopup={this.signUp.bind(this)}
            sendData={this.submit.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default App;

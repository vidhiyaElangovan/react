import React from 'react';
import '../../assets/css/popup.css';
class Popup extends React.Component {
    constructor(props){
        super(props)
        this.state = {name : '',email:'',pass:'',cpass:''};
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changeCpass = this.changeCpass.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    changeName(event){
        this.setState({name: event.target.value});
    }
    changeEmail(event){
        this.setState({email: event.target.value});
    }
    changePass(event){
        this.setState({pass: event.target.value});
    }
    changeCpass(event){
        this.setState({cpass: event.target.value});
    }
    submitForm(event){
        event.preventDefault();
        this.props.sendData([{name:this.state.name,email:this.state.email,pass:this.state.pass,cpass:this.state.cpass}]);
    }
    render() {
        return (
        <div className='popup'>
          <div className='popup_inner'>
            <button type="button" className="close" onClick={this.props.closePopup} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h2>{this.props.text}</h2>
            <form onSubmit={this.submitForm}>
            {this.props.text !== "Login" ?
            <label>Name:
            <input type="text" value={this.state.name} className="form-control" name="name" onChange={this.changeName}/>
            </label>
            : null
            }
            <br />
            <label>Email:
            <input type="email" value={this.state.email} className="form-control" name="email" onChange={this.changeEmail}/>
            </label>
            <br />
            <label>Password:
            <input type="password" value={this.state.pass} className="form-control" name="pass" onChange={this.changePass}/>
            </label>
            <br />
            {this.props.text !== "Login" ?
            <label>Confirm Password:
            <input type="password" value={this.state.cpass} className="form-control" name="cpass" onChange={this.changeCpass}/>
            </label>
             : null
            }
            <br />
            <button type="submit" className="btn btn-dark" value="submit">Submit</button>
            </form>
         
          </div>
        </div>
      );
    }
  }
export default Popup;

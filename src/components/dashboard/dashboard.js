  /*eslint-env jquery*/
import React, { Component } from 'react';
import '../../assets/css/dashboard.css';
import Adduser from '../dashboard/adduser';
//import Actions from '../../actions/actions';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            addUserPopup: false,
            key:'',
            userData:[],
            listItems:[],
            editUserData : ''
          };
        this.addUser =  this.addUser.bind(this)
    }
    addUser(){
        this.setState({
            addUserPopup: !this.state.addUserPopup,
            key:"Add Data",
            editUserData : ""
          });
    }
    editUser(data){       
        this.setState({
            addUserPopup: !this.state.addUserPopup,
            key:"Edit Data",
            editUserData : data
          });
    }
    deleteUser(id){
        this.setState({
            addUserPopup: !this.state.addUserPopup,
        });
        axios({
            method: 'delete',
            url: 'http://localhost/angular/public/api/v1/deleteData/'+id,
        }).then(response =>  {
            this.setState({
                userData : response.data,
                addUserPopup: !this.state.addUserPopup
              });
        });
    }
    componentDidMount() {
        fetch("http://localhost/angular/public/api/v1/getData")
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState({
                userData : responseJSON
            })            
        });
      }
    data(data){
        
        if(this.state.key ==="Add Data"){
            axios({
                method: 'post',
                url: 'http://localhost/angular/public/api/v1/addData',
                data: {
                    data
                }
            }).then(response =>  {
                this.setState({
                    userData : response.data,
                    addUserPopup: !this.state.addUserPopup
                  });
            });
        }else{
            axios({
                method: 'post',
                url: 'http://localhost/angular/public/api/v1/editData/'+data.id,
                data: {
                    data
                }
            }).then(response =>  {
                this.setState({
                    userData : response.data,
                    addUserPopup: !this.state.addUserPopup
                  });
            });
        }
    }

    tableData = () => {
        let table = this.state.userData.map((user, i) =>{
             return(<tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.interest}</td>
                  <td>{user.skills}</td>
                  <td onClick={this.editUser.bind(this ,user)}>Edit</td>
                  <td onClick={this.deleteUser.bind(this,user.id)}>Delete</td>
            </tr> )}
          )
          return table;
    }

    render(){
        return (
            <div className="dashboard">
                <h3>welcome home</h3>
                <button type="button" className="btn btn-info" onClick={this.addUser.bind(this)}>Add User</button>
                {this.state.addUserPopup ? 
                    <Adduser
                        title={this.state.key}
                        editData={this.state.editUserData}
                        closePopup={this.addUser.bind(this)}
                        sendData={this.data.bind(this)}
                    />
                    : null
                }
                <p>User Details</p>
                <table className="table" border="1"> 
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Interest</th>
                        <th>Skills</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableData()} 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dashboard
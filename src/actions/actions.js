import React, { Component } from 'react';
//import axios from 'axios';

class Actions extends Component {
    getData(){
        fetch("http://localhost/angular/public/api/v1/getData")
        .then((response) => response.json())
        .then((responseJSON) => {
            return responseJSON         
        });
    }
}
export default Actions
import React, { Component } from 'react';
import axios from 'axios'

import {
    FormGroup,
    Input,
    FormText,
    Button,
    Label
} from 'reactstrap'

 class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        selectedFile: null
    }

    _handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    _handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    _handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    _handleFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
        console.log(event.target.files[0])
    }

    handleSubmit = () => {
        console.log(this.state.selectedFile)
        axios.post('http://localhost:6969/api/users', {
            username: this.state.username,
            password: this.state.username,
            email: this.state.email,
            // avatar: this.state.selectedFile,
            // contentType: this.state.selectedFile.type
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    render() {
     return (
       <div>
           <FormGroup>
                <Label>Username</Label>
                <Input type='text' placeholder='Username...' onChange={this._handleUsernameChange}/>
                <Label>Password</Label>
                <Input type='password' placeholder='Password...' onChange={this._handlePasswordChange}/>
                <Label>Email</Label>
                <Input type='email' placeholder='Email...' onChange={this._handleEmailChange}/>
                <FormText>Avatar</FormText>
                <Input type='file' onChange={this._handleFileChange}/>
                <br/>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
       </div>
     );
   }
 }
 
 export default RegisterForm;
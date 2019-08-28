import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import RegisterForm from './components/RegisterForm'
import AllPost from './components/AllPost';
import UpPost from './components/UpPost';
import SinglePost from './components/SinglePost';
import DetailPost from './components/DetailPost';

class App extends Component {

  state = {
    username: "",
    password: "",
    login: false,
    postsData: []
  }

  _changeUsernameLogin = (text) => {
    this.setState({ username: text });
  }

  _changePasswordLogin = (text) => {
    this.setState({ password: text });
  }

  handleLogin = () => {
    axios.post('http://localhost:6969/api/auth', {
      username: this.state.username,
      password: this.state.password
    })
    .then(data => {
      if (data.status === 200){
        this.setState({posts: JSON.parse(data.config.data).username})
        this.setState({login: true})
      }
    })
    .catch(err => console.log(err))
  }

  render() { 
    if (!this.state.login){
      return(
        <div className='background'>
          <NavBar usernameChange={this._changeUsernameLogin} passwordChange={this._changePasswordLogin} loginChange={this.handleLogin}/>
          <br/>
          <h1 className='d-flex justify-content-center'>Welcome to fakebook</h1>
          <h3 className='d-flex justify-content-center'>Register now</h3>
          <div className='container' style={{width: '600px'}}>
            <RegisterForm />
          </div>
        </div>
      )
    }
    else return (
      <div className='background'>
        {/* <NavBar usernameChange={this._changeUsernameLogin} passwordChange={this._changePasswordLogin} loginChange={this.handleLogin}/>
          <AllPost/>
        <UpPost/> */}
          <BrowserRouter>
          <div>
            <Route exact path="/" component={AllPost}  />
            <Route path="/post/:id" component={DetailPost} />   
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

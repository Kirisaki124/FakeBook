import React from 'react';
import '../materialize/materialize/css/materialize.css'
import {
  Row, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
// import axios fr  om 'axios'

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'



export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  _handleUsernameChange = event => this.props.usernameChange(event.target.value)
  
  _handlePasswordChange = event => this.props.passwordChange(event.target.value)

  handleLogin = event => this.props.loginChange()

  render() {
    return (
      <Row className='d-flex justify-content-end'>
      <div>
        {/* <h1>header</h1> */}
        {this.renderContent()}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <form action="">
              <input onChange={this._handleUsernameChange} placeholder='username' type="text"/>
              <input onChange={this._handlePasswordChange} placeholder='password' type="password"/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button className='mr-3' color="primary" onClick={this.handleLogin}>Login</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </Row>
    );
  }

  renderContent(){
    if (this.props.username) 
      return <div>{this.props.username}</div>
    else 
      return <button onClick={this.toggle} className='waves-effect waves-light btn'>Login</button>
   
  }
}
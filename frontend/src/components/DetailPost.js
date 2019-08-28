import React, { Component } from 'react';
import axios from 'axios'

class DetailPost extends Component {

    state = {
        title: "",
        description: ""
    }

    componentWillMount() {
        axios
            .get(`http://localhost:6969/api${this.props.match.url}`)
            .then(data => {
                console.log(data.data)
                this.setState({
                    title: data.data.title,
                    description: data.data.description
                })
            })
            .catch(err => console.log(err))
        }
    render() {
      console.log(this.props)
    return (
      <div className='container text-center'>
            <img src={'http://localhost:6969/api' + this.props.match.url + '/data'} className='post center' style={{width: '80%'}} alt=""/>
          <div>
            <h1 className='text-center'>{this.state.title}</h1>
            <h4 className='text-center'>{this.state.description}</h4>
            <label>Comment</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
      </div>
    );
  }
}

export default DetailPost;
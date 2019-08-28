import React, { Component } from 'react';
import axios from 'axios'
import SinglePost from './SinglePost'
import RenderAllPost from './RenderAllPost';

class AllPost extends Component {

  state = {
    postData: []
  }

  componentDidMount() {
    axios.get('http://localhost:6969/api/post')
    .then(data => {
      this.setState({postData: data})
    })
    .catch(err => console.log(err))
  }
  
  render() {
    // console.log(this.state.postData)
      return (
        <div className='container'>
          <RenderAllPost allPost={this.state.postData.data}/>
        </div>
    );
  }
}

export default AllPost;
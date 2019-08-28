import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SinglePost extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='row d-flex justify-content-around'>
        <Link to={`/post/${this.props.id}`}>
           <img style={{height: '200px', width: 'auto'}} className='post' src={"http://localhost:6969" + this.props.image}/>
        </Link>
          <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default SinglePost;
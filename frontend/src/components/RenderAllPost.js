import React, { Component } from 'react';
import SinglePost from './SinglePost'

class RenderAllPost extends Component {
  render() {
      if (this.props.allPost) {
            const posts = this.props.allPost.map(post => (<SinglePost image={post.imageUrl} title={post.title} description={post.description} id={post._id}/>))
            return (
            <div>
                {posts}  
            </div>
            );
      }
      else return <h1 style={{color: 'white'}}>Loading</h1>
  }
}

export default RenderAllPost;
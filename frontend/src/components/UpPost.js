import React, { Component } from 'react';
import axios from 'axios'
import {
    FormGroup,
    Input,
    FormText,
    Button,
    Label
} from 'reactstrap'


class UpPost extends Component {

        
    _handleTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    _handleDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    _handleFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
        // console.log(event.target.files[0])
    }


    handleSubmit = () => {
        console.log(this.state.selectedFile)
        const fd = new FormData()
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('http://localhost:6969/api/post', {
            title: this.state.title,
            description: this.state.description,
            image: this.state.selectedFile
        })
        .then(data => console.log('done'))
        .catch(err => console.log(err))
}

   render() {
    return (
      <div>
           <FormGroup>
                <Label>Title</Label>
                <Input type='text' placeholder='Title...' onChange={this._handleTitle}/>
                <Label>Description</Label>
                <Input type='text' placeholder='Description...' onChange={this._handleDescription}/>
                <FormText>Image</FormText>  
                <Input type='file' onChange={this._handleFileChange}/>
                <br/>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
      </div>
    );
  }
}

export default UpPost;
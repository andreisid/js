import React, { Component } from "react";

class AddPhoto extends Component {
  state = {};
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault(); //do not refresh page when click the button
    const imageLink = event.target.elements.Link.value;
    const description = event.target.elements.Description.value;
    const post = {
      id: 0,
      description: description,
      imageLink: imageLink
    };
    if (imageLink && description) {
      this.props.onAddPhoto(post);
    }
  }

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="Link" />
            <input type="text" placeholder="Description" name="Description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;

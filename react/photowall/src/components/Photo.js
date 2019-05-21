import React, { Component } from "react";

class Photo extends Component {
  state = {};
  render() {
    const post = this.props.post;
    return (
      <figure>
        <img src={post.imageLink} alt={post.descripton} />
      </figure>
    );
  }
}

export default Photo;

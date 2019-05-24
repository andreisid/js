import React, { Component } from "react";

class Photo extends Component {
  state = {};
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.descripton} />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button">Remove</button>
        </div>
      </figure>
    );
  }
}

export default Photo;

import React, { Component } from "react";
import Photo from "./Photo";

class PhotoWall extends Component {
  state = {};
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default PhotoWall;

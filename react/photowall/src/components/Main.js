import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";

const posts = [
  {
    id: "0",
    description: "landscape",
    imageLink: "http://lorempixel.com/400/200/sports/1"
  },
  {
    id: "2",
    description: "aliens",
    imageLink: "http://lorempixel.com/400/200/sports/2"
  },
  {
    id: "3",
    description: "on vacation",
    imageLink: "http://lorempixel.com/400/200/sports/3"
  }
];

class Main extends Component {
  render() {
    return (
      <div>
        <Title text={"Photowall"} />
        <Photowall posts={posts} />
      </div>
    );
  }
}

export default Main;

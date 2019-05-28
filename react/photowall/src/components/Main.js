import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";

function getRandomPic() {
  const rand = Math.floor(Math.random() * 10);
  let url = "http://lorempixel.com/400/200/sports/" + rand.toString();
  return url;
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "landscape",
          imageLink: getRandomPic()
        },
        {
          id: "2",
          description: "aliens",
          imageLink: getRandomPic()
        },
        {
          id: "3",
          description: "on vacation",
          imageLink: getRandomPic()
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  //saves the state before the update
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevState.posts);
  }

  removePhoto(postRemoved) {
    //console.log(this.state.posts.filter(post => post !== postRemoved));
    //console.log(this.state);

    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
    //console.log(this.state);
  }

  render() {
    console.log("render");
    return (
      <div>
        <Title text={"Photowall"} />
        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

export default Main;

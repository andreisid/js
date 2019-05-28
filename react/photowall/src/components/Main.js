import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

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
      ],
      screen: "photos" //phots, addPhoto
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
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

  navigate() {
    this.setState({ screen: "addPhoto" });
    //console.log("navigate");
  }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.screen === "photos" && (
          <div>
            <Title text={"Photowall"} />
            <Photowall
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            />
          </div>
        )}
        {this.state.screen === "addPhoto" && (
          <div>
            <AddPhoto />
          </div>
        )}
      </div>
    );
  }
}

export default Main;

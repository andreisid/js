import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

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
    //console.log("constructor");
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }

  //saves the state before the update
  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate");
    //console.log(prevState.posts);
  }

  removePhoto(postRemoved) {
    //console.log(this.state.posts.filter(post => post !== postRemoved));
    //console.log(this.state);

    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
    //console.log(this.state);
  }

  addPhoto(postSubmitted) {
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }));
    setTimeout(console.log(this.state), 3000);
  }

  navigate() {
    this.setState({ screen: "addPhoto" });
    //console.log("navigate");
  }

  render() {
    //console.log("render");
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title text={"Photowall"} />
              <Photowall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              />
            </div>
          )}
        />
        {/* <Route path="/AddPhoto" render={() => <AddPhoto />} /> */}
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={addedPost => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;

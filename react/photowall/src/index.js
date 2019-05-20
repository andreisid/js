import React, { Component } from "react";
import ReactDOM from "react-dom";

class List extends Component {
  render() {
    return (
      <ol>
        {this.props.tasks.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>Tasks list</h1>;
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <List tasks={["wake up", "eat", "wash", "go to work"]} />
        <List tasks={["drive home", "eat", "study", "drink beer", "sleep"]} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

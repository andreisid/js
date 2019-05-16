import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counter => {
    // console.log("delete event called", counterId);
    const counters = [...this.state.counters];
    let newCounters = [];
    counters.forEach(c => {
      if (c.id !== counter.id) newCounters.push(c);
    });
    console.log(newCounters);
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const counters = this.state.counters;
    counters.forEach(c => (c.value = 0));
    //console.log(counters);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    console.log(counter);
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value--;
      console.log(counter);
      this.setState({ counters: counters });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

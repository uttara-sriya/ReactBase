import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };
  handleDelete = counterId => {
    console.log("Event Handler for delete clicked!", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // <Counter key={counter.id} value={counter.value} selected={true} />
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            //instead of value, id and selected we can pass counter obj itself
            counter={counter}
            onDelete={this.handleDelete}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { counters, onIncrement, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete} //counter can not change the state of counters, therefore, it needs onDelete to call handleDelete in Counters
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

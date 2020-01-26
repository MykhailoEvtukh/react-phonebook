import React, { Component } from "react";

class Filter extends Component {
  render() {
    const filter = this.props.data.filter(user => {
      return user.name.toLowerCase().includes(this.props.filter);
    });

    return (
      <ul>
        {filter.map(elem => (
          <li key={elem.id} id={elem.id}>
            <span>
              {elem.name}: {elem.number}
            </span>
            <button onClick={this.props.delete}>✖</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Filter;

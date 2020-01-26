import React, { Component } from "react";
import css from "./contactList.module.css";

class Contact extends Component {
  render() {
    return (
      <ul className={css.ul}>
        {this.props.data.map(elem => (
          <li key={elem.id} id={elem.id}>
            <span>
              {elem.name}: {elem.number}
            </span>
            <button className={css.deleteButton} onClick={this.props.delete}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contact;

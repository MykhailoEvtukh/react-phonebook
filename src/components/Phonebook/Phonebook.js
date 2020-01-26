import React, { Component } from "react";
import css from "./phonebook.module.css";
import ContactList from "../Contacts/ContactList";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";

const randomID = require("uuid/v1");

export default class Phonebook extends Component {
  state = {
    name: "",
    number: ""
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.getContact(this.state);
    this.setState({
      ...this.state
    });
  };

  onHandleGetValue = e => {
    const info = e.target.value;
    const name = e.target.name;
    this.setState(() => {
      const data = {
        id: randomID(),
        [name]: info
      };
      return data;
    });
  };

  onHandleDelete = e => {
    const id = e.target.closest("li").id;
    this.props.delete(id);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2 className={css.h2}>Phonebook</h2>
        <ContactForm
          name={name}
          number={number}
          onHandleSubmit={this.onHandleSubmit}
          onHandleGetValue={this.onHandleGetValue}
        />
        <h2 className={css.h2}>Contacts</h2>
        <input
          className={css.input}
          onChange={this.props.search}
          type="text"
          placeholder="Find contact by name..."
        />
        {this.props.filter !== "" ? (
          <Filter
            data={this.props.data}
            filter={this.props.filter}
            delete={this.onHandleDelete}
          />
        ) : (
          <ContactList data={this.props.data} delete={this.onHandleDelete} />
        )}
      </>
    );
  }
}

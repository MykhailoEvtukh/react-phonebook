import React, { Component } from "react";
import Phonebook from "./components/Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ contacts: users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.contacts) !== JSON.stringify(this.state.contacts)
    ) {
      localStorage.setItem("users", JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  getContact = contact => {
    if (this.state.contacts.find(el => el.name === contact.name)) {
      alert("This name is already exist in your contact list");
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact]
        };
      });
    }
  };

  searchContact = e => {
    const value = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        filter: value
      };
    });
  };

  render() {
    return (
      <Phonebook
        getContact={this.getContact}
        data={this.state.contacts}
        filter={this.state.filter}
        search={this.searchContact}
        delete={this.deleteContact}
      />
    );
  }
}

export default App;

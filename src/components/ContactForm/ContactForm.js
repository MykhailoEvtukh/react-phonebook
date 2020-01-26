import React from "react";
import css from "./form.module.css";

const ContactForm = ({ name, number, onHandleGetValue, onHandleSubmit }) => (
  <form className={css.form} onSubmit={onHandleSubmit}>
    <input
      className={css.input}
      value={name}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter name..."
      name="name"
    />
    <input
      className={css.input}
      value={number}
      onChange={onHandleGetValue}
      type="text"
      placeholder="Enter phone number..."
      name="number"
    />
    <button className={css.addButton} type="submit">
      Add contact
    </button>
  </form>
);

export default ContactForm;

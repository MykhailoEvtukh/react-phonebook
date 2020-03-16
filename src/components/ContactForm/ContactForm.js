import React from "react";
import css from "./form.module.css";

const ContactForm = ({ name, number, onHandleGetValue, onHandleSubmit }) => (
  <div className={css.formContainer}>
    <form className={css.form} onSubmit={onHandleSubmit}>
      <input
        className={css.input}
        value={name}
        onChange={onHandleGetValue}
        type="text"
        placeholder="Enter name..."
        name="name"
        required
      />
      <input
        className={css.input}
        value={number}
        onChange={onHandleGetValue}
        type="text"
        placeholder="Enter phone number..."
        name="number"
        required
      />
      <button className={css.addButton} type="submit">
        Add contact
      </button>
    </form>
  </div>
);

export default ContactForm;

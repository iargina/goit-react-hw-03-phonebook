import React, { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', number: '' };
  renderOnChange(ev) {
    const stateOption = ev.currentTarget.name;
    this.setState({ [stateOption]: ev.currentTarget.value });
    return;
  }
  render() {
    return (
      <form className="contactForm" onSubmit={this.pushToContact}>
        <label htmlFor="" className="formLabel">
          Name
          <input
            type="text"
            name="name"
            className="inputName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.renderOnChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="" className="formLabel">
          Phone number
          <input
            type="tel"
            name="number"
            className="inputNumber"
            value={this.state.number}
            onChange={this.renderOnChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

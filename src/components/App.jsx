import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', clientname: 'Rosie Simpson', clientnumber: '459-12-56' },
        { id: 'id-2', clientname: 'Hermione Kline', clientnumber: '443-89-12' },
        { id: 'id-3', clientname: 'Eden Clements', clientnumber: '645-17-79' },
        { id: 'id-4', clientname: 'Annie Copeland', clientnumber: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
    this.renderOnChange = this.renderOnChange.bind(this);
    this.pushToContact = this.pushToContact.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
  }
  renderOnChange(ev) {
    const stateOption = ev.currentTarget.name;
    this.setState({ [stateOption]: ev.currentTarget.value });
    return;
  }

  deleteClient(ev) {
    const clientID = ev.currentTarget.parentElement.id;
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== clientID),
    });
    return;
  }
  pushToContact(event) {
    event.preventDefault();
    const client = {
      id: nanoid(),
      clientname: this.state.name,
      clientnumber: this.state.number,
    };
    const result = this.state.contacts.find(
      el => el.clientname === this.state.name
    );
    if (result) {
      alert(`${this.state.name} is already in your contact list`);
      return;
    }

    this.state.contacts.push(client);
    this.setState({ name: '', number: '' });
    return;
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2 className="formTitle">Add Contact</h2>
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
        <div>
          <h2 className="contactListTitle">Contacts</h2>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.renderOnChange}
          />
          <ul>
            {this.state.filter
              ? this.state.contacts.map(el => {
                  if (
                    el.clientname
                      .toLowerCase()
                      .includes(this.state.filter.toLowerCase())
                  ) {
                    return (
                      <li key={el.id} id={el.id}>
                        {el.clientname}: {el.clientnumber}
                        <button type="button" onClick={this.deleteClient}>
                          Delete
                        </button>
                      </li>
                    );
                  }
                  return <div key={el.id}></div>;
                })
              : this.state.contacts.map(el => {
                  return (
                    <li key={el.id} id={el.id}>
                      {el.clientname}: {el.clientnumber}
                      <button type="button" onClick={this.deleteClient}>
                        Delete
                      </button>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    );
  }
}

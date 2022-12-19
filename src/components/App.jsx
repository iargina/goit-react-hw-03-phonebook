import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  deleteClient(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  }

  pushToContact(client) {
    const result = this.state.contacts.find(el => el.name === client.name);
    if (result) {
      alert(`${client.name} is already in your contact list`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [client, ...prevState.contacts],
      };
    });
  }
  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  renderOnChange(ev) {
    const stateOption = ev.currentTarget.name;
    this.setState({ [stateOption]: ev.currentTarget.value });
    return;
  }
  render() {
    const filteredContact = this.filterContact();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h2 className="formTitle">PhoneBook</h2>
        <ContactForm pushToContact={this.pushToContact.bind(this)} />
        <h2 className="contactListTitle">Contacts</h2>
        <Filter
          renderOnChange={this.renderOnChange.bind(this)}
          stateFilter={this.state.filter}
        />
        <ContactList
          stateFilter={this.state.filter}
          deleteClient={this.deleteClient.bind(this)}
          contacts={filteredContact}
        />
      </div>
    );
  }
}

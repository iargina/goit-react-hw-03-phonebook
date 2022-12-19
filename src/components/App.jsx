import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  deleteClient(ev) {
    const clientID = ev.currentTarget.parentElement.id;
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== clientID),
    });
    return;
  }

  pushToContact(client) {
    const result = this.state.contacts.find(
      el => el.clientName === client.clientName
    );
    if (result) {
      alert(`${client.clientName} is already in your contact list`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [client, ...prevState.contacts],
      };
    });
  }

  renderOnChange(ev) {
    const stateOption = ev.currentTarget.name;
    this.setState({ [stateOption]: ev.currentTarget.value });
    return;
  }
  render() {
    console.log(this.props);
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
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

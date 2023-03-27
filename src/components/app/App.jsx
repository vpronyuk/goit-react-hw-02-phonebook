import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = { id: nanoid(), name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

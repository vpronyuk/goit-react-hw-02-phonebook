import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number, contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label htmlFor="nameInput">Name</label>
            </div>
            <input
              type="text"
              name="name"
              id="nameInput"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="number">Number</label>
            </div>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

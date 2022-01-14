import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import './ContactForm.scss';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const names = this.props.items.map(contact => contact.name);

    if (names.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      return;
    } else {
      this.props.onSubmit(this.state);
      this.props.onClose();
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div className="Form__box">
          <label className="Form__label">Name</label>
          <input
            className="Form__input"
            value={name}
            onChange={this.handleNameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className="Form__label">Number</label>
          <input
            className="Form__input"
            value={number}
            onChange={this.handleNameChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className="Form__button" type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: state => dispatch(contactsActions.addContact(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

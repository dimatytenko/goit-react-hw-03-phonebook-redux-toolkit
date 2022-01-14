import ContactItem from 'components/ContactItem';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} />
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, value) => {
  const normalizedFilter = value.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

ContactItem.propTypes = {
  contacts: PropTypes.array,
};

export default connect(mapStateToProps, null)(ContactList);

import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';
import IconButton from 'components/IconButton';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';

function ContactItem({ name, number, onDelete }) {
  return (
    <div className="contact">
      <li className="contact__item">
        {name}: {number}
        <IconButton aria-label="minus" onClick={() => onDelete(name)}>
          <MinusIcon width="20" height="20" />
        </IconButton>
      </li>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onDelete: name => dispatch(contactsAction.deleteContact(name)),
});

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ContactItem);

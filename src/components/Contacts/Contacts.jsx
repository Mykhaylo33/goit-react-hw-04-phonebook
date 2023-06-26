import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import css from './Contacts.module.css';

const Contacts = ({ contactList, deleteContact }) => {
  return (
    <ul className={css.container}>
      {contactList.map(({ id, name, number }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;

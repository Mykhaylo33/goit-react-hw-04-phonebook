import React from 'react';
import PropTypes from 'prop-types';
import css from './ListItem.module.css';

const ListItem = ({ id, name, number, deleteContact }) => {
  const handleClick = () => {
    deleteContact(id);
  };

  return (
    <li className={css.listItem}>
      <p className={css.name}>{name}</p>
      <span className={css.separator}>:</span>
      <p className={css.number}>{number}</p>
      <button className={css.button} onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ListItem;

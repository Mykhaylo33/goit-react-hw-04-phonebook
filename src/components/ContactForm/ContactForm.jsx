import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Phone
        <FormInput
          type="text"
          value={number}
          name="number"
          onChange={handleChange}
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

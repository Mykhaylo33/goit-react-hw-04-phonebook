import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';

const LS_KEY = 'phonebook';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      setContacts(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addUser = (newItem) => {
    const decisionForAdd = isIncludingName(newItem.name, contacts);

    if (decisionForAdd) {
      alert(`${decisionForAdd.name} is already in contacts!`);
      return;
    }

    setContacts((prev) => [...prev, newItem]);
  };

  const filterByName = () => {
    const lowName = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(lowName)
    );
  };

  const isIncludingName = (name, array) => {
    const lowName = name.toLowerCase();
    return array.find(({ name }) => name.toLowerCase() === lowName);
  };

  const inputHandler = (e) => {
    setFilter(e.target.value);
  };

  const deleteHandler = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <Form addUser={addUser} />
      <h2 className={css.title}>Contacts</h2>
      <Filter inputHandler={inputHandler} inputValue={filter} />
      <Contacts contactList={filterByName()} deleteContact={deleteHandler} />
    </div>
  );
};

export default App;

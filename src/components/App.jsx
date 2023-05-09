import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Css from './ContactList/ContactList.module.css';
import { nanoid } from 'nanoid';

const CONTACTS = 'phonebook';
const contacts_users =
[
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () =>
{
    const save_data = JSON.parse(localStorage.getItem(CONTACTS));

    const [contacts, setContacts] = useState(save_data === null ? contacts_users : save_data);
    const [filter, setFilter] = useState('');

    useEffect(() =>
    {
        if (contacts.length === 0)
        {
            localStorage.removeItem(CONTACTS);

            console.log("\nContacts remove is data application!");
        }
        else
        {
            localStorage.setItem(CONTACTS, JSON.stringify(contacts));
        }

    }, [contacts]);

    const onChange = (e) =>
    {
        setFilter(e.currentTarget.value);
    }
    const handleAddContact = ({ name, number }) =>
    {
        if (contacts.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()))
        {
            alert(`This is ${name} is alredy in contacts!`);
        }
        else
        {
            setContacts((contact) =>
            {
                const contact_list = [...contact];

                contact_list.push({ id: nanoid(), name: name, number: number });

                return contact_list;
            });
        }
    }
    const handleFilterContact = () =>
    {
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        
        return filteredContacts;
    }
    const handleDeleteContact = (evt) =>
    {
        evt.preventDefault();
      
        const id = evt.currentTarget.id;

        const filtred = contacts.filter(item => item.id !== id);
        
        setContacts(filtred);
    }
    return (
        <div>
            <h1 className={Css.title_phonebook}
                style={{ margin: '40px auto', textAlign: 'center', color: 'rgb(55, 55, 199)' }}>Phonebook</h1>
            <ContactForm addContact={handleAddContact} />
            <h1 className={Css.title_contact}
                style={{ margin: '40px auto', textAlign: 'center', color: 'rgb(32, 163, 32)' }}>Contacts</h1>
            <Filter filter={filter} onChange={onChange}/>
            {contacts.length === 0 ?
            <h2 style={{ margin: '40px auto', textAlign: 'center', color: 'rgb(206, 70, 70)' }}>Contacts not found!</h2>
            :
            <ContactList contacts={handleFilterContact()} deleteContact={handleDeleteContact}/>}
        </div>
    );
}
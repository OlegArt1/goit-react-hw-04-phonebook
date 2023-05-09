import { useState } from 'react';
import PropTypes from 'prop-types';
import Css from './ContactForm.module.css';

export const ContactForm =({ addContact }) =>
{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeInput = evt =>
    {
        const { name, value } = evt.currentTarget;

        name === 'name' ? setName(value) : setNumber(value);
    };
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        addContact({ name, number });
        
        setName("");
        setNumber("");
    }
    return (
        <form className={Css.form} onSubmit={handleSubmit}>
            <label className={Css.form__label} htmlFor="name">
                <span className={Css.form__span_text}>Name</span>
                <input className={Css.form__input_name} type="text" name="name" value={name}
                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       placeholder="Enter name" onChange={onChangeInput} required/>
            </label>
            <label className={Css.form__label} htmlFor="number">
                <span className={Css.form__span_text}>Number</span>
                <input className={Css.form__input_number} type="tel" name="number" value={number}
                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       placeholder="Enter number" onChange={onChangeInput} required/>
            </label>
            <p className={Css.form__button_block}>
                <button className={Css.form__button} type="submit">Add contact</button>
            </p>
        </form>
    );
};
ContactForm.propTypes =
{
    addContact: PropTypes.func.isRequired,
};
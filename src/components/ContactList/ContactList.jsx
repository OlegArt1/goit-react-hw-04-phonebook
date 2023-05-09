import PropTypes from 'prop-types';
import Css from './ContactList.module.css';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, deleteContact }) =>
{
    const ListId = nanoid();
    
    return (
        <div className={Css.contact}>
            <ul className={Css.contact__list}>
                {contacts.map(contact =>
                {
                    return (
                        <li className={Css.contact__item} key={contact.id}>
                            <label className={Css.contact__label} htmlFor={ListId}>
                                <b className={Css.contact__text_name}>Name:&nbsp;&nbsp;</b>
                                <span id={ListId} className={Css.contact__text_span}>{contact.name};</span>
                            </label>
                            <label className={Css.contact__label} htmlFor={ListId}>
                                <b className={Css.contact__text_phone}>Phone:&nbsp;&nbsp;</b>
                                <span id={ListId} className={Css.contact__text_span}>{contact.number};</span>
                            </label>
                            <button id={contact.id} className={Css.contact__button} type="button" onClick={deleteContact}>X</button>
                            <br/><br/><br/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
ContactList.propTypes =
{
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
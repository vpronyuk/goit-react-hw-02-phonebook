import css from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };
  return (
    <div className={css.container}>
      <li>
        <div className={css.name}>{contact.name}</div>
        <div className={css.number}>{contact.number}</div>
        <button className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ContactItem;

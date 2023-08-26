import { Contact } from "./Contact";
export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id}
                    name={name}
                    number={number}
                    onClick={() => onDelete(id) } />))}
        </ul>
    )
}
import { But } from "components/ContactForm/ContactForm.styled";

export const Contact = ({name, number, onClick}) => (
    <li><p>
        {name}:{number}
    </p>
        <But type="button" onClick={ onClick}>Delete</But>
    </li>)

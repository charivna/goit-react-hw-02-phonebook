export const Contact = ({name, number, onClick}) => (
    <li><p>
        {name}:{number}
    </p>
        <button type="button" onClick={ onClick}>Delete</button>
    </li>)

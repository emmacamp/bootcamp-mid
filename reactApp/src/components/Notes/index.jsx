export const Notes = ({ title, body }) => {
    return (
        <li>
            <h2>{title}</h2>
            <small>
                <p>{body}</p>
            </small>
        </li>
    );
};

export default function Item({ name, quantity, category }) {
    return (
        <li className="p-4 bg-white rounded shadow-md">
            <p><strong>{name}</strong></p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}

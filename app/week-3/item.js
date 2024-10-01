

export default function Item({ name, quantity, category }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>Buy {quantity}</p>
            <p>in {category}</p>
        </div>
    )
}
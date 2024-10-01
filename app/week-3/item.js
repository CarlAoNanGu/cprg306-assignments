

export default function Item({ name, quantity, category }) {

    return (
        <div className="bg-blue-100">
            <h3 className="font-bold text-center">{name}</h3>
            <p className="text-center">Buy {quantity}</p>
            <p className="text-center">in {category}</p>
        </div>
    )
}
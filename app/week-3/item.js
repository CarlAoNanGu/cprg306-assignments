

export default function Item({ name, quantity, category }) {

    return (
        <div className="bg-blue-100">
            <h3 className="font-bold ">{name}</h3>
            <p className="">Buy {quantity}</p>
            <p className="">in {category}</p>
        </div>
    )
}
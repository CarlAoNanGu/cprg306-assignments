import Item from './item';

export default function ItemList() {
    const items = [
        { name: "Milk, 4 L 🥛", quantity: 1, category: "dairy" },
        { name: "Bread 🍞", quantity: 2, category: "bakery" },
        { name: "Eggs, dozen 🥚", quantity: 2, category: "dairy" },
        { name: "Bananas 🍌", quantity: 6, category: "produce" },
        { name: "Broccoli 🥦", quantity: 3, category: "produce" },
        { name: "Chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
        { name: "Pasta sauce 🍝", quantity: 3, category: "canned goods" },
        { name: "Spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
        { name: "Toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
        { name: "Paper towels, 6 pack", quantity: 1, category: "household" },
        { name: "Dish soap 🍽️", quantity: 1, category: "household" },
        { name: "Hand soap 🧼", quantity: 4, category: "household" },
    ];

    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <Item
                    key={index}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </ul>
    );
}

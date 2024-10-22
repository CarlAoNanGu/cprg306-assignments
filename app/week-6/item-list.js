'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const groupByCategory = () => {
        return items.reduce((groups, item) => {
            const category = item.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(item);
            return groups;
        }, {});
    };

    const sortedItems = sortBy === "category-grouped" ? groupByCategory() : [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div className="mb-4">
                <button
                    onClick={() => setSortBy("name")}
                    className={`mr-2 px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`mr-2 px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy("category-grouped")}
                    className={`px-4 py-2 rounded ${sortBy === "category-grouped" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Group by Category
                </button>
            </div>

            {sortBy === "category-grouped" ? (
                <div>
                    {Object.keys(sortedItems).map((category) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold capitalize">{category}</h2>
                            <ul className="space-y-2">
                                {sortedItems[category].map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="space-y-2">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

"use client";

import { useState } from "react";

export default function ItemList({ items, onItemSelect, onDeleteItem }) {
    const [sortBy, setSortBy] = useState("name");

    // Group items by category
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

    // Sort or group items based on user selection
    const sortedItems =
        sortBy === "category-grouped"
            ? groupByCategory()
            : [...items].sort((a, b) => {
                if (sortBy === "name") {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === "category") {
                    return a.category.localeCompare(b.category);
                }
                return 0;
            });

    return (
        <div>
            {/* Sorting Options */}
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
                    className={`px-4 py-2 rounded ${sortBy === "category-grouped"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                >
                    Group by Category
                </button>
            </div>

            {/* Render Grouped Items */}
            {sortBy === "category-grouped" ? (
                <div>
                    {Object.keys(sortedItems).map((category) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold capitalize">{category}</h2>
                            <ul className="space-y-2">
                                {sortedItems[category].map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center mb-2"
                                    >
                                        <span
                                            onClick={() => onItemSelect(item.name)}
                                            className="cursor-pointer text-blue-500 hover:underline"
                                        >
                                            {item.name} ({item.quantity})
                                        </span>
                                        <button
                                            onClick={() => onDeleteItem(item.id)}
                                            className="text-red-500 hover:text-red-700 ml-4"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                /* Render Sorted Items */
                <ul className="space-y-2">
                    {sortedItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center mb-2"
                        >
                            <span
                                onClick={() => onItemSelect(item.name)}
                                className="cursor-pointer text-blue-500 hover:underline"
                            >
                                {item.name} ({item.quantity})
                            </span>
                            <button
                                onClick={() => onDeleteItem(item.id)}
                                className="text-red-500 hover:text-red-700 ml-4"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

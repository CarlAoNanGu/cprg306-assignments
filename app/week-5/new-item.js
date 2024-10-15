"use client";

import React, { useState } from 'react';

function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    function increment() {
        setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
    }

    function decrement() {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    }

    function handleSubmit(event) {
        event.preventDefault();


        const newItem = {
            name,
            quantity,
            category,
        };

        console.log(newItem);
        alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Item Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter item name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Quantity:</label>
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={decrement}
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <span className="text-xl">{quantity}</span>
                        <button
                            type="button"
                            className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={increment}
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="category" className="block text-gray-700">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default NewItem;

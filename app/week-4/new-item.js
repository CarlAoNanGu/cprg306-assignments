
"use client";

import React, { useState } from 'react';

function NewItem() {
    const [quantity, setQuantity] = useState(1);

    function increment() {
        setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
    }

    function decrement() {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Item</h2>

            <div className="flex items-center justify-center space-x-4">
                <button
                    className={`px-4 py-2 bg-red-500 text-white rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={decrement}
                    disabled={quantity === 1}
                >
                    -
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                    className={`px-4 py-2 bg-green-500 text-white rounded ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={increment}
                    disabled={quantity === 20}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default NewItem;

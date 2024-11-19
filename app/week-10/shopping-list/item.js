"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <div className="flex justify-between">
        <span>{name}</span>
        <span className="text-gray-500">{quantity}</span>
      </div>
      <div className="text-sm text-gray-400">{category}</div>
    </li>
  );
}

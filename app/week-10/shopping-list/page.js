"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service"; // Import deleteItem
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
      return;
    }

    const loadItems = async () => {
      const items = await getItems(user.uid);
      setItems(items);
    };

    loadItems();
  }, [user, router]);

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    if (!user) return;

    const itemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
  };

  // Handle deleting an item
  const handleDeleteItem = async (itemId) => {
    if (!user) return;

    await deleteItem(user.uid, itemId);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Handle selecting an item for meal ideas
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };

  // Render UI
  return user ? (
    <main className="p-6 bg-gray-50 min-h-screen flex">
      {/* Left Column: Shopping List */}
      <div className="w-1/2 pr-4">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          onDeleteItem={handleDeleteItem} // Pass delete handler
        />
      </div>

      {/* Right Column: Meal Ideas */}
      <div className="w-1/2 pl-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  ) : (
    <p>Redirecting...</p>
  );
}

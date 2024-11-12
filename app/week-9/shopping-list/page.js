"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const { user, gitHubSignIn } = useUserAuth(); // Include gitHubSignIn for login
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      // Redirect to the shopping list page if user is logged in
      router.push("/week-9/shopping-list");
    }
  }, [user, router]);

  // Handle login
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Add item handler
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Item selection handler with name cleaning
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!user ? (
        <button onClick={handleLogin} className="btn btn-primary">
          Log in with GitHub
        </button>
      ) : (
        <main className="p-6 bg-gray-50 min-h-screen flex">
          <div className="w-1/2 pr-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-1/2 pl-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </main>
      )}
    </div>
  );
}

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-6 bg-green-100 min-h-screen">
      <h1 className="text-3xl bg-blue-100 font-bold mb-6 text-center">Shopping List</h1>
      <ItemList/>
    </main>
  );
}

// app/components/Main.js
export default function Main({ children }) {
  return (
    <main className="p-6 min-h-screen bg-white text-gray-900">
      {children}
    </main>
  );
}

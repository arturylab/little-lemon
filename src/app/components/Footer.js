// app/components/Footer.js
export default function Footer() {
  return (
    <footer className="text-center py-4 mt-10 text-sm text-gray-600">
        <hr className="w-3/4 mx-auto border-gray-300 mb-4" />
        {new Date().getFullYear()} Little Lemon. All rights reserved.
    </footer>
  );
}

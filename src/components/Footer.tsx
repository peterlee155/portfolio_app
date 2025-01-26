export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Peter Lee. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
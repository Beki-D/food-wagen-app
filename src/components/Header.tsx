const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">FoodWagen</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Menu
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { Bell, ChevronDown, Search } from "lucide-react";
import user from "../assets/user.png";
import flag from "../assets/flag.png";

const Navbar = () => {
  return (
    <div className="bg-white  p-4 flex items-center justify-between">
     <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

     <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[400px] shadow-sm">
      <Search className="text-indigo-500 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Search here..."
        className="bg-transparent outline-none text-gray-600 w-full"
      />
    </div>

    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-1 cursor-pointer">
        <img
          src={flag} 
          alt="English"
          className="w-5 h-5 rounded-full"
        />
        <span className="text-gray-800 font-medium">Eng (US)</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      <div className="relative bg-yellow-100 p-2 rounded-lg cursor-pointer">
        <Bell className="text-yellow-600 w-5 h-5" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </div>

      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src={user} 
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-900 font-semibold">Musfiq</p>
          <p className="text-gray-500 text-sm">Admin</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
    </div>
  );
};

export default Navbar;

import { PieChart, BarChart, ShoppingCart, Package, LineChart, LogOut, Settings } from "lucide-react";
import logo from "../assets/logo.png";
import GetPro from "../assets/get-pro.png";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 p-4 bg-white">
      <img src={logo} alt="" />
      <ul className="space-y-2 mt-12">
        <li className="flex items-center p-3 bg-blue-600 rounded-lg text-white shadow-lg">
          <PieChart className="w-5 h-5 mr-3" />
          Dashboard
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <BarChart className="w-5 h-5 mr-3" />
          Leaderboard
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <ShoppingCart className="w-5 h-5 mr-3" />
          Orders
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <Package className="w-5 h-5 mr-3" />
          Products
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <LineChart className="w-5 h-5 mr-3" />
          Sales Report
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <Settings className="w-5 h-5 mr-3" />
          Setting
        </li>
        <li className="flex items-center p-3 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </li>
      </ul>

      <div className="absolute bottom-6 right-6">
      <img src={GetPro} className="w-[210px] h-[200px] cursor-pointer" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;

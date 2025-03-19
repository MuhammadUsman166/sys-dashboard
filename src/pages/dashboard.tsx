import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import CustomCard from "../Components/CustomCard";
import TopProducts from "../Components/TopProduct";
import SalesMapping from "../Components/SalesMapping";
import VolumnChart from "../Components/VolumnChart";
import { Upload } from "lucide-react";

import sales from "../assets/sales.png";
import customers from "../assets/customers.png";
import order from "../assets/order.png";
import sold from "../assets/sold.png";

const Dashboard = () => {
  const salesData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 60 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 80 },
    { name: "May", value: 50 },
  ];

  const data = [
    { day: "Monday", online: 12000, offline: 18000 },
    { day: "Tuesday", online: 15000, offline: 16000 },
    { day: "Wednesday", online: 10000, offline: 25000 },
    { day: "Thursday", online: 14000, offline: 20000 },
    { day: "Friday", online: 17000, offline: 15000 },
    { day: "Saturday", online: 19000, offline: 14000 },
    { day: "Sunday", online: 22000, offline: 12000 },
  ];

  const satisfactionData = [
    { month: "Jan", lastMonth: 3000, thisMonth: 4000 },
    { month: "Feb", lastMonth: 2800, thisMonth: 4200 },
    { month: "Mar", lastMonth: 3200, thisMonth: 4400 },
    { month: "Apr", lastMonth: 2900, thisMonth: 4600 },
    { month: "May", lastMonth: 3100, thisMonth: 4800 },
  ];

  
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="ml-64 bg-[#FAFBFC]">
          <Navbar />
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4  rounded-lg col-span-2">
                <div className="flex  items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
                  <button className="flex items-center gap-2 border border-gray-300 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                    <Upload size={18} />
                    <span className="font-medium">Export</span>
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4 my-4">
                  <Card
                    title="Total Sales"
                    value="$1k"
                    color="bg-[#FFE2E5]"
                    img={sales}
                    percent="+8% from yesterday"
                    percentColor="text-blue-500"
                  />
                  <Card
                    title="Total Order"
                    value="300"
                    color="bg-[#FFF4DE]"
                    img={order}
                    percent="+5% from yesterday"
                    percentColor="text-blue-500"
                  />
                  <Card
                    title="Product Sold"
                    value="5"
                    color="bg-[#DCFCE7]"
                    img={sold}
                    percent="+1.2% from yesterday"
                    percentColor="text-blue-500"
                  />
                  <Card
                    title="New Customers"
                    value="8"
                    color="bg-[#F3E8FF]"
                    img={customers}
                    percent="0.5% from yesterday"
                    percentColor="text-blue-500"
                  />
                </div>
              </div>

              <div className="bg-white p-4  rounded-lg col-span-1.5">
                <h3 className="text-lg font-semibold mb-2">
                  Customer Satisfaction
                </h3>
                <ResponsiveContainer width="100%" height="70%">
                  <LineChart data={salesData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 py-6 bg-[#FAFBFC]">
              <div className="col-span-2 ">
                <CustomCard title="Total Revenue Card">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="online"
                        fill="#3498db"
                        name="Online Sales"
                      />
                      <Bar
                        dataKey="offline"
                        fill="#2ecc71"
                        name="Offline Sales"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CustomCard>
              </div>
              <div className="col-span-1.5 ">
                <CustomCard title="Customer Satisfaction Card">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={satisfactionData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="lastMonth"
                        stroke="#2980b9"
                        name="Last Month"
                      />
                      <Line
                        type="monotone"
                        dataKey="thisMonth"
                        stroke="#27ae60"
                        name="This Month"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CustomCard>
              </div>
              <div className="col-span-1.5 ">
                <CustomCard title="Total Revenue">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={satisfactionData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="lastMonth"
                        fill="#f1c40f"
                        name="Reality Sales"
                      />
                      <Bar
                        dataKey="thisMonth"
                        fill="#e74c3c"
                        name="Target Sales"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CustomCard>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 bg-[#FAFBFC] ">
              <div className="col-span-2 ">
                <TopProducts />
              </div>
              <div className="col-span-1.5">
                <SalesMapping />
              </div>
              <div className="col-span-1.5">
                <VolumnChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

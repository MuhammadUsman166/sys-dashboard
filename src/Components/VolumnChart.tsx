import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import CustomCard from "./CustomCard";

const VolumnChart = () => {
  const data = [
    { name: "A", volume: 1135, service: 635 },
    { name: "B", volume: 1020, service: 520 },
    { name: "C", volume: 950, service: 450 },
    { name: "D", volume: 870, service: 420 },
    { name: "E", volume: 760, service: 310 },
  ];

  return (
    <>
      <CustomCard title="Volume vs Service Level">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volume" fill="#3B82F6" />
            <Bar dataKey="service" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </CustomCard>
    </>
  );
};

export default VolumnChart;

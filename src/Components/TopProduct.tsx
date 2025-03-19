import CustomCard from "./CustomCard";

const TopProducts = () => {
  const products = [
    {
      id: "01",
      name: "Home Decor Range",
      popularity: "45%",
      color: "#0095FF",
      bgColor: "#CDE7FF",
    },
    {
      id: "02",
      name: "Disney Princess Pink Bag 18'",
      popularity: "29%",
      color: "#00E096",
      bgColor: "#8CFAC7",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      popularity: "18%",
      color: "#884DFF",
      bgColor: "#C5A8FF",
    },
    {
      id: "04",
      name: "Apple Smartwatches",
      popularity: "25%",
      color: "#FF8F0D",
      bgColor: "#FFD5A4",
    },
  ];


  return (
    <CustomCard title="Top Products">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="py-2">#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t text-gray-700">
              <td className="py-2">{p.id}</td>
              <td>{p.name}</td>
              <td>
                <div className={`w-full bg-[${p.bgColor}] h-1.5 rounded-full`}>
                  <div
                    className={`bg-[${p.color}] h-1.5 rounded-full`}
                    style={{ width: p.popularity }}
                  ></div>
                </div>
              </td>
              <td>
                <span className={`ml-2 px-2 py-1 border-2 rounded-full border-[${p.color}] text-[${p.color}] bg-[${p.bgColor}] text-sm`}>
                  {p.popularity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CustomCard>
  );
};

export default TopProducts;

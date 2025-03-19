interface Props {
  title: string;
  value: string;
  color: string;
  img: string;
  percent: string;
  percentColor: string;
}


const Card = ({ title, value, color, img, percent, percentColor,  }: Props) => (
  <div className={`p-6 rounded-xl shadow-lg ${color} relative`}>
    <div className="w-12 h-12 ">
      <img src={img} alt="" />
    </div>

    <h3 className="text-2xl font-bold mt-4">{value}</h3>
    <p className="text-gray-700 text-md">{title}</p>
    <p className={`text-sm font-medium ${percentColor} mt-1`}>{percent}</p>
  </div>
);


export default Card;

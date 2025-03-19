import { ReactNode } from "react";

interface Pros {
    title: string,
    children: ReactNode
}


const CustomCard = ({ title, children }: Pros) => {
    return (
      <div className="bg-white rounded-2xl p-5 h-full">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    );
};


export default CustomCard
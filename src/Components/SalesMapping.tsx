import CustomCard from "./CustomCard";
import world from "../assets/world.png";
const SalesMapping = () => {
    return (
        <CustomCard title="Sales Mapping by Country">
          <img src={world} alt="Sales Map" className="w-full" />
        </CustomCard>
      );
}

export default SalesMapping

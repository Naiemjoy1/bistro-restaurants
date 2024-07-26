import FoodCard from "../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10 mt-10">
      {items.map((item) => (
        <FoodCard key={item.id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;

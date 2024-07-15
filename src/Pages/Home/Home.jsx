import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import OrderOnline from "./OrderOnline/OrderOnline";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;

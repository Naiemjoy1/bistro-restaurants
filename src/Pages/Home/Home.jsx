import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import OrderOnline from "./OrderOnline/OrderOnline";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;

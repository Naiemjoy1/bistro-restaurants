import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Components/Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <Cover img={shopImg} title="our menu"></Cover>
      <div className="px-28 py-14">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10">
              {salad.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10">
              {pizza.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10">
              {soup.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10">
              {dessert.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10">
              {drinks.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;

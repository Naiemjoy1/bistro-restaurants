import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Components/Hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <section className=" space-y-10">
        <section>
          <SectionTitle
            heading="Today's Offer"
            subHeading="Don't miss"
          ></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
        </section>
        <MenuCategory
          items={dessert}
          title="dessert"
          coverImg={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title="pizza"
          coverImg={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title="salad"
          coverImg={saladImg}
        ></MenuCategory>
        <MenuCategory
          items={soup}
          title="soup"
          coverImg={soupImg}
        ></MenuCategory>

        <MenuCategory items={drinks}></MenuCategory>
      </section>
    </div>
  );
};

export default OurMenu;

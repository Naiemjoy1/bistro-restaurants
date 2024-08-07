import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Components/Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const populer = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="my-16 container mx-auto">
      <section>
        <SectionTitle
          heading="From Our menu"
          subHeading="Popular items"
        ></SectionTitle>
        <div className=" grid md:grid-cols-2 gap-10">
          {populer.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;

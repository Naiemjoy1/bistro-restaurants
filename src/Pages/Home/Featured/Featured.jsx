import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div
      className="featured-background bg-fixed text-white"
      style={{
        backgroundImage: `url(${featuredImg})`,
      }}
    >
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="flex justify-center gap-10 items-center py-8 px-16">
        <div>
          <img src={featuredImg} alt="Featured" />
        </div>
        <div className="space-y-6">
          <p>aug 20, 2000</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsa
            dolore ipsam ad assumenda consequuntur, sit, velit minima libero
            nulla hic quos deleniti non unde veritatis blanditiis ea optio atque
            quasi provident? Facilis mollitia vitae non dicta debitis cupiditate
            hic sequi quis? At laudantium reprehenderit ab ullam, esse libero
            qui?
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

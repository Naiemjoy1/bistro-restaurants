const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl relative">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-4">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary uppercase">add to cart</button>
          </div>
        </div>
        <div className="absolute top-4 right-8 bg-black text-white px-4 py-1 rounded-lg">
          {price}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

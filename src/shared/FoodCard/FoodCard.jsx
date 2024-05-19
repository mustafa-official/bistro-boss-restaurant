import PropTypes from "prop-types";
const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-black text-white absolute top-14 px-3 py-1 right-14">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
FoodCard.propTypes = {
  item: PropTypes.object,
};

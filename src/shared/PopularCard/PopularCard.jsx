import PropTypes from "prop-types";

const PopularCard = ({ item }) => {
  // console.log(item);
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex items-center gap-6">
      <div>
        <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[118px] object-cover h-[100px]" src={image} alt="" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl ">{name}----------------</h2>
          <p className="text-[#BB8506]">${price}</p>
        </div>
        <h2>{recipe}</h2>
      </div>
    </div>
  );
};

export default PopularCard;
PopularCard.propTypes = {
  item: PropTypes.object,
};

import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { name, recipe, image, price, _id } = item || {};
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-black text-white absolute top-14 px-3 py-1 right-14">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddCart} className="btn btn-primary">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
FoodCard.propTypes = {
  item: PropTypes.object,
};

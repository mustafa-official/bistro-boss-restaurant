import { Helmet } from "react-helmet-async";
import menubg from "../../assets/menu/banner3.jpg";
import Cover from "../../shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/SectionHeading";
import OrderCard from "../../shared/OrderCard/OrderCard";

import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="space-y-10">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        bgImg={menubg}
        heading="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>
      <SectionHeading
        subheading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionHeading>
      {/* offered */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {offered.map((item) => (
          <OrderCard key={item._id} item={item}></OrderCard>
        ))}
      </div>
      
      <Cover
        bgImg={dessertImg}
        heading="desserts"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      {/* pizza */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {pizza.map((item) => (
          <OrderCard key={item._id} item={item}></OrderCard>
        ))}
      </div>
      <Cover
        bgImg={pizzaImg}
        heading="pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      {/* salad */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {salad.map((item) => (
          <OrderCard key={item._id} item={item}></OrderCard>
        ))}
      </div>
      <Cover
        bgImg={saladImg}
        heading="salad"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      {/* soup */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {soup.map((item) => (
          <OrderCard key={item._id} item={item}></OrderCard>
        ))}
      </div>
      <Cover
        bgImg={soupImg}
        heading="soup"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
    </div>
  );
};

export default Menu;

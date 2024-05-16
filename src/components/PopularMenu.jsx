import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import PopularCard from "../shared/PopularCard/PopularCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setMenu(popular);
      });
  }, []);
  // console.log(menu);
  return (
    <div>
      <SectionHeading
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionHeading>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {menu.map((item) => (
          <PopularCard key={item._id} item={item}></PopularCard>
        ))}
      </div>
     <div className="flex justify-center my-10 md:my-16">
     <button className="uppercase px-5 hover:bg-black hover:text-white py-2 rounded-lg border-b-black  border-b-2">View Full  Menu</button>
     </div>
    </div>
  );
};

export default PopularMenu;

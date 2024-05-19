import shopBg from "../../assets/shop/shop.jpg";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../shared/FoodCard/FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        bgImg={shopBg}
        heading={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <div className="mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <div className="justify-center flex">
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUP</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-10">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;

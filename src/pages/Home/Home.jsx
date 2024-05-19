import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import BistroBoss from "../../components/BistroBoss";
import CallUs from "../../components/CallUs";
import Featured from "../../components/Featured";
import HomeSlider from "../../components/HomeSlider";
import PopularMenu from "../../components/PopularMenu";
import SectionHeading from "../../components/SectionHeading";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <SectionHeading
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionHeading>
      <HomeSlider></HomeSlider>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </section>
  );
};

export default Home;

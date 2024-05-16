import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);
  return (
    <div className="my-8 md:my-16">
      <SectionHeading
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionHeading>

      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" text-center">
              <div className="px-8 space-y-4  flex flex-col justify-center items-center md:px-16">
                <Rating
                  className="text-3xl"
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                ></Rating>
                <FaQuoteLeft className="text-3xl md:text-5xl"></FaQuoteLeft>
                <p>{review?.details}</p>
                <p className="text-[#CD9003] text-2xl font-bold">
                  {review?.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
const Cover = ({ bgImg, heading, description }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImg}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="w-full text-white h-auto md:h-[500px] flex justify-center items-center bg-center bg-cover">
          <div className=" space-y-2 h-auto py-3 md:h-56 mx-16 w-full px-8 bg-[#00000079]  flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-4xl uppercase">{heading}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Parallax>
      <Link to={`/shop/${heading}`} className="flex justify-center my-6">
        <button className="uppercase px-5 hover:bg-black hover:text-white py-2 rounded-lg border-b-black  border-b-2">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default Cover;
Cover.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  bgImg: PropTypes.any,
};

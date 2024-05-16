import PropTypes from "prop-types";
const SectionHeading = ({ subheading, heading }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center my-8">
      <p className="text-[#D99904]">---{subheading}---</p>
      <h2 className="py-6 text-2xl md:text-3xl border-y my-2">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
SectionHeading.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
};

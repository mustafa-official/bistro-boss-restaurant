import feature from "../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-center relative bg-cover  h-[600px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${feature})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex z-10 flex-col text-center justify-center items-center py-8">
        <p className="text-[#D99904]">---Check it out---</p>
        <h2 className="py-6 text-2xl text-white md:text-3xl border-y my-2">
          FROM OUR MENU
        </h2>
      </div>
      <div className="flex  z-10justify-center lg:flex-row gap-14 items-center flex-col">
        <div className="z-10">
          <img className="w-full  md:w-[500px]" src={feature} alt="" />
        </div>
        <div className="text-white z-10 w-full md:w-[500px]">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur
          </p>
          <button className="uppercase hover:bg-black hover:border-none px-5 mt-6 text-white py-2 rounded-lg border-b-white  border-b-2">
            Read More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
};

export default Featured;

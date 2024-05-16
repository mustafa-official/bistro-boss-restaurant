import bgimg from "../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      className="w-full h-auto md:h-96 flex justify-center items-center  my-10 bg-center bg-cover md:my-16"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="text-black space-y-2 h-auto py-3 md:h-56 mx-16 px-8 bg-white  flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl uppercase">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;

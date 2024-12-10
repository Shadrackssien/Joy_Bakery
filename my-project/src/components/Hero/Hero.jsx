import HeroImg from "../../assets/shadrack.jpg";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left pt-20 md:p-0 pb-10">
          <h1 className="text-3xl font-semibold">
            Delicious Bread is waiting for you
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            amet laborum harum repellat velit beatae molestias, eum vero minima
            officia fugit asperiores est consequuntur
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center py-2">
            <button className="primary-btn text-black">Food Menu</button>
            <button className="secondary-btn text-black">Book Table</button>
          </div>
        </div>
        {/* image Section */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="max-w-[500px] w-[340px] mx-auto md:mx-0 rounded-full img-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

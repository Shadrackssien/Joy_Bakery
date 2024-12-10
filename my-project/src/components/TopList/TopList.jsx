import Image3 from "../../assets/Image3.jpg";
import Image4 from "../../assets/Image4.jpg";

const foodData = [
  {
    image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Tea Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Tea Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Tea Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/*header section*/}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/*Card Section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white/50 p-3 rounded-3xl hover:scale-110 transition duration-300"
            >
              <img
                src={item.image}
                alt="bread"
                className="w-40 h-40 object-cover rounded-full mx-auto img-shadow"
              />
              <div className="space-y-2 mt-4">
                <p>{item.rating}</p>
                <p className="text-lg font-semibold">{item.name}</p>
                <p>{item.desc}</p>
                <p className="font-semibold text-lg">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopList;

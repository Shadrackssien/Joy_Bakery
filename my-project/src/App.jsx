import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopList from "./components/TopList/TopList";
import BgImage from "./assets/image5.jpg";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
      </div>
    </div>
  );
};

export default App;

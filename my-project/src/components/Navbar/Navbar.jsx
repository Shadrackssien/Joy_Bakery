import Profile from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* logo Section */}
        <div>
          <p className="text-lg font-semibold">
            JOY <span className="text-yellow-500">BAKERY</span>
          </p>
        </div>

        {/* Menu Section */}
        <div className="flex justify-center items-center gap-6">
          <ul className="gap-6 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              Home
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              About
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              Menu
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              Contact
            </li>
          </ul>
          {/* Login Section */}
          <div className="flex gap-4 items-center">
            {/* Add Profile svg file */}
            <img
              src={Profile}
              alt="profile icon"
              className="w-10 rounded-full"
            />
            {/* npm install react-icons and replace with arrow down icon */}
            <p>!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Navbar from "../Navbar";
import "./style.css";

const Header = () => {
  return (
    <header className="sticky bg-[#ffffff99] top-0 z-10 shadow-[0px_0px_1px_1px_#cbd5c9] py-2 backdrop-blur-md">
      <Navbar />
    </header>
  );
};

export default Header;

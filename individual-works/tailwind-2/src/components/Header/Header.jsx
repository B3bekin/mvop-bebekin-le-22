import { AiOutlineSearch } from "react-icons/ai";
import NavItem from "./NavItem";

const Header = () => {
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "Features",
    },
    {
      label: "Pricing",
    },
    {
      label: "Testimonial",
    },
  ];
  return (
    <header className="bg-red-500 min-h-[20px] py-4">
      <div className="layout-container flex justify-between items-center">
        <div className="font-bold font-sans bg-blue-300 p-2 rounded-xl">
          <p>Blood leasing :)</p>
        </div>
        {/* w-[50px]  */}
        <div className="flex gap-4 justify-between">
          {navItems.map((navItems) => (
            <NavItem label={navItems.label} />
          ))}
        </div>
        <div className="">
          <div>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

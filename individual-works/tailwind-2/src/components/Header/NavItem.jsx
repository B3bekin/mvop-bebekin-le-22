const NavItem = (props) => {
  return (
    <div className="px-9 py-2  text-white font-bold hover:text-black cursor-pointer">
      {props.label}
    </div>
  );
};

export default NavItem;

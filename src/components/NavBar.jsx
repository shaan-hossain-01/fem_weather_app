import React from "react";
import DropdownBtn from "./DropdownBtn";

const NavBar = () => {
  return (
    <nav>
      <div className="my-12 flex justify-between items-center">
        <img src="/src/assets/images/logo.svg" alt="Logo" />
        <DropdownBtn image={true}>Units</DropdownBtn>
      </div>
    </nav>
  );
};

export default NavBar;
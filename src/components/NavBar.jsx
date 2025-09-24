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

// in my navbar component, there is a button named DropdownBtn. Whenever i click that button, i want it to:
// 1.give option to choose units between metric and imperial,
// 2. after that choosing option, there should be options under that, to choose if i want to :
// i. choose between celcius and fahreinheit for temperature
// ii.choose between km/h or mph for wind speed
// iii. choose between milimeters and inches for percipitation
// iv. there should be label for each options for what they are used for

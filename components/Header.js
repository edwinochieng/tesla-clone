import React from "react";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import Image from "next/image";

function Header() {
  return (
    <div className="fixed top-0 left-0 z-[100] w-full bg-transparent mt-4 px-12 flex justify-between">
      <div>
        <Image src={TeslaLogo} alt="tesla logo" height="18" width="100" />
      </div>
      <div>
        <ul className="flex">
          <li className="pr-6">Model S</li>
          <li className="pr-6">Model 3</li>
          <li className="pr-6">Model X</li>
          <li className="pr-6">Model Y</li>
          <li className="pr-6">Solar Roof</li>
          <li className="pr-6">Solar Panels</li>
          <li className=""></li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-end">
          <li className="pr-7">Shop</li>
          <li className="pr-7">Account</li>
          <li className="">Menu</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

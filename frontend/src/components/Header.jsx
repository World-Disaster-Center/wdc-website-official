import { Link, useLocation } from "react-router-dom";
import WDC from "../assets/images/wdcimage.png";
import { dropdownData } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import DropdownItem from "./dropdownItem";
import LanguageDropdown from "./MultiLangue";
import SearchButton from "./SearchButton";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  useEffect(() => {
    setOpenNavigation(false);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50   min-[1340px]:bg-n-8/90 min-[1340px]:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className=" container flex items-center justify-between  py-2">
        <Link className="" to="/">
          <div className="flex whitespace-nowrap gap-1">
            <img src={WDC} alt="Brainwave" className=" w-16 h-16" />
            <div className="flex flex-col items-center text-center align-center justify-center">
              <span className="logo-style-1">WORLD DISASTER</span>
              <span className="logo-style-2">CENTER</span>
            </div>
          </div>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex " : "hidden"
          } fixed top-[5rem] left-0  right-0 bottom-0 bg-n-8 min-[1340px]:static min-[1340px]:flex min-[1340px]:bg-transparent opacity-90`}
        >
          <div className="relative w-full gap-x-1 z-2 flex flex-col items-center m-auto min-[1340px]:flex-row">
            <Link
              className="mr-4 text-white font-light hover:text-sky-300"
              to="/"
            >
              Home
            </Link>
            {dropdownData.map((dropdown, index) => (
              <DropdownItem
                key={index}
                setOpenNavigation={setOpenNavigation}
                title={dropdown.title}
                routings={dropdown.routings}
              />
            ))}
            <div className="flex   gap-4 items-center min-[1340px]:ml-4">
              <Link
                className="mr-4 text-white font-light hover:text-sky-300"
                to="/impact"
              >
                Impact
              </Link>

              <SearchButton />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <Link
                  to="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
                  target="_blank"
                >
                  Donate
                </Link>
              </button>

              <button className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500 transition duration-300">
                <Link
                  to="/membership"
                  // target = "_blank"
                >
                  Membership
                </Link>
              </button>
            </div>
          </div>
          <HamburgerMenu />
        </nav>
        <Button
          className="ml-auto min-[1340px]:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

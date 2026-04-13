import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon from "../../public/images/svg/boaty.svg";
import Logo from "./Logo";
function Header() {
  return (
    <>
      <nav className="flex justify-between ml-25 mr-25 w-16rem">
        <div
          id="navLeft"
          className=" flex h-screen content-around justify-around flex-col"
        >

          <ul className="text-sky-200 ">
            <li><Logo /></li>
            <li className="pt-3 text-2xl">Hello, I&apos;m</li>
            <li className="text-5xl">Sarah Johnson</li>
          </ul>
          <button className="self-start rounded-full bg-white py-1 px-4 text-grey font-thin italic hover:not-italic hover:shadow-md transition duration-150 ease-in hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">
            Resume
          </button>
        </div>
      </nav>
    </>
  );
}
export default Header;

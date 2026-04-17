import Link from "next/link";
import React from "react";
import Image from "next/image";
import TrimIcon from "./svg/Icon";
import Icon from "../../public/images/boaty.svg";

function RightHero() {
  return (
    <>
      <div id="navRight" className="md:w-[calc(100vw-16rem)] md:mr-25 justify-end">
        <div className="flex h-screen items-center justify-end text-right">
          <ul>
            <li className="group flex justify-end hover:text-[#fff] hover:italic transition duration-150 ease-in">
              <TrimIcon className="hidden fill-[#fff] hover:fill-[#fff] group-hover:flex h-50" />
              <Link className="md:text-[1em] sm:text-[.3em]" href="./blog">Blog</Link>
            </li>
            <li className=" group flex justify-end hover:text-[#fff] hover:italic transition duration-150 ease-in">
              <TrimIcon className="hidden fill-[#fff] hover:fill-[#fff] group-hover:flex h-50" />
              <Link className="md:text-[1em] sm:text-[.3em]"href="./Sites">Sites</Link>
            </li>
            <li className=" group flex  justify-end hover:text-[#fff] hover:italic transition duration-150 ease-in">
              <TrimIcon className="hidden fill-[#fff] hover:fill-[#fff] group-hover:flex h-50" />
              <Link className="md:text-[1em] sm:text-[.3em]" href="./Water">Water</Link>
            </li>
            <li className="group flex  justify-end hover:text-[#fff] hover:italic transition duration-150 ease-in">
              <TrimIcon className="hidden fill-[#fff] hover:fill-[#fff] group-hover:flex h-50" />
              <Link className="md:text-[1em] sm:text-[.3em]"href="https://trimtabular.com/photo-selects.html">Photog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default RightHero;

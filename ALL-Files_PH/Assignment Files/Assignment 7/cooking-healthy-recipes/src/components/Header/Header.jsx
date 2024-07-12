import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1 gap-96">
          <a class="text-xl md:font-extrabold">BD Keto Recipes</a>
          <div className="hidden md:flex">
            <ul class="menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gap-2">
          <div class="btn form-control flex flex-row justify-between items-center gap-2 md:px-10 py-1 bg-slate-200 rounded-2xl">
            <CiSearch></CiSearch>
            <input type="button" value="search" />
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class=" avatar">
              <div className="bg-lime-500 p-2 rounded-3xl">
                <div class="text-2xl text-black">
                  <FaRegCircleUser></FaRegCircleUser>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

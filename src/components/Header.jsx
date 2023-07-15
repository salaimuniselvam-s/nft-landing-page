import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiTwotoneFolder } from 'react-icons/ai';
import logo from '../assets/logo.png';

const pages = [
  {
    title: 'Art',
    path: '/art',
  },
  {
    title: 'Collectible',
    path: '/collectible',
  },
  {
    title: 'Gaming',
    path: '/gaming',
  },
  {
    title: 'Explore',
    path: '/explore',
  },
];

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <header className="fixed z-50 w-screen  bg-white max-w-1600 mx-auto py-3 px-4 md:py-6 md:px-16">
      {/* desktop & tablet */}
      <div className="flex w-full h-full items-center justify-between">
        <img src={logo} className="w-36 object-cover" alt="logo" />
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex  items-center gap-12 px-12">
            {pages.map((page) => (
              <PagesFc
                page={page}
                key={page.title}
                className="text-lg hover:text-blue-700  duration-100 transition-all ease-in-out cursor-pointer"
              />
            ))}
          </ul>
        </div>
        <div className="flex gap-4 px-3 grow justify-center items-center">
          <SearchFc />
          <button
            type="submit"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Create
          </button>
          <BiUserCircle size={32} className=" text-blue-600" />
          <AiTwotoneFolder size={32} className=" text-blue-600" />
          <button
            onClick={() => setIsNavActive(!isNavActive)}
            type="button"
            className="text-white lg:hidden inline-flex  rounded-md bg-gradient-to-br from-orange-400 to-orange-500 p-2 cursor-pointer"
            aria-expanded="false"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>

          {isNavActive && (
            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-20 right-0">
              <ul className="flex flex-col  gap-3">
                {pages.map((page) => (
                  <PagesFc
                    page={page}
                    key={page.title}
                    className="text-lg  px-3 py-1 hover:bg-slate-200 duration-100 transition-all ease-in-out cursor-pointer"
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

const SearchFc = () => {
  return (
    <>
      <div className="relative grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Items.."
          required
        />
      </div>
    </>
  );
};
const PagesFc = ({ page, className }) => {
  return (
    <li className={className} key={page.title}>
      {page.title}
    </li>
  );
};

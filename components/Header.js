import Image from "next/image";
import { useTheme } from 'next-themes'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon
} from "@heroicons/react/solid";
import { useState, useRef, useEffect } from "react";
import CustomLink from "./CustomLink";
import ToggleSwitch from "./buttons/ToggleSwitch";
import TipButton from "./buttons/TipButton";

import { useRouter } from "next/dist/client/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/blog",
      query: {
        location: searchInput,
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Handle light modes

  return (
    <header
      className="sticky top-0 z-40 grid
        grid-cols-3 bg-opacity-80 shadow-md p-5 md:px-10"
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10
                cursor-pointer my-auto"
      >
        {/* Left */}
          <CustomLink href="https://notredame.live/"     className="flex flex-row left border-solid hover:border-teal-500 dark:hover:border-ndblue-100 cursor-pointer">
          
            <Image
              src="/images/gold-helmet.svg"
              alt="Golden Helmet"
              objectFit="contain"
              objectPosition="left"
              width="75%"
              height="75%"
            />

          </CustomLink>

          {/* <CustomLink>
            <div className="form-switch focus-within:outline-blue flex flex-col justify-center ml-3">
              <input type="checkbox" name="light-switch" id="light-switch-desktop" className="light-switch sr-only" onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')} />
                <label 
                  className="relative" 
                  htmlFor="light-switch-desktop">
                  <span className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10" aria-hidden="true"></span>
                  <svg 
                    className="absolute inset-0" 
                    width="44"
                    height="24" 
                    viewBox="0 0 44 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                      <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                      <circle cx="32" cy="12" r="3" />
                      <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                      <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                    </g>
                  </svg>
                  <span className="sr-only bg-[#00843D]">Switch to light / dark version</span>
                </label>
            </div>
          </CustomLink> */}
          
        {/* <Image
                src="https://divoperations.com/resources/wedding-images/logos/header-heart-img.png" 
                objectFit="contain"
                objectPosition="left"
                width="100%"
                height="100%"
            /> */}
      </div>

      {/* Middle */}
      <div
        className="flex items-center md:border-2 rounded-full py-2
            md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm
                    text-gray-900 dark:text-gray-900 placeholder-white focus:ring-teal-500"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
                text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-200 dark:text-gray-200">
        <CustomLink href="https://notredame.live/blog" className="hidden md:inline cursor-pointer">Blog</CustomLink>
        <CustomLink href="https://notredame.live/" className="hidden md:inline cursor-pointer">Home</CustomLink>
        {/* <ToggleSwitch className="bg-teal-500 dark:bg-ndblue-100 "/> */}
        <TipButton className="bg-teal-500 dark:bg-ndblue-100 "/>
      </div>
      

      {/* {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div>
            <h2 classname="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Header;
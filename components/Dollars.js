import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import CustomLink from './CustomLink';
import SmallOne from "./one-dollar/SmallOne";
import SmallTwo from "./two-dollars/SmallTwo";
import SmallFive from "./five-dollars/SmallFive";
import SmallTen from "./ten-dollars/SmallTen";
import SmallTwenty from "./twenty-dollars/SmallTwenty";
import SmallFifty from "./fifty-dollars/SmallFifty";
import SmallOneHundred from "./one-hundred-dollars/SmallOneHundred";

function Dollars({ href }) {
  const router = useRouter();
  const [descriptionOn, setdescriptionOn] = useState(false);
  const [pathname, setPathname] = useState(false);
  const [active, setActive] = useState(0);
  const [items] = useState([
    {
      id: "one",
      img: "/images/dollar-1.svg",
      name: "Leave a $1 tip?",
      price: "1",
      pathname: "/tip-portal/leave-a-one-dollar-tip",
      tax: ""
    },
    // {
    //   id: "two",
    //   img: "/images/dollar-2.svg",
    //   name: "Leave a $2 tip?",
    //   price: "2",
    //   pathname: "/tip-portal/leave-a-two-dollar-tip",
    //   tax: "txcd_10000000"
    // },
    {
      id: "five",
      img: "/images/dollar-5.svg",
      name: "Leave a $5 tip?",
      price: "5",
      pathname: "/tip-portal/leave-a-five-dollar-tip",
      tax: "txcd_10000000"
    },
    {
      id: "ten",
      img: "/images/dollar-10.svg",
      name: "Leave a $10 tip?",
      price: "10",
      pathname: "/tip-portal/leave-a-ten-dollar-tip",
      tax: "txcd_10000000"
    },
    
    {
      id: "twenty",
      img: "/images/dollar-20.svg",
      name: "Leave a $20.00 tip?",
      price: "20",
      pathname: "/tip-portal/leave-a-twenty-dollar-tip",
      tax: "txcd_10000000"
    },
    {
      id: "fifty",
      img: "/images/dollar-50.svg",
      name: "Leave a $50.00 tip?",
      price: "50",
      pathname: "/tip-portal/leave-a-fifty-dollar-tip",
      tax: "txcd_10000000"
  },
  {
    id: "one-hundred",
    img: "/images/dollar-100.svg",
    name: "Leave a $100.00 tip?",
    price: "100",
    pathname: "/tip-portal/leave-a-one-hundred-dollar-tip",
    tax: "txcd_10000000"
  }
  ])

    return (
        <section className="flex flex-container content-center">
          {/* {items.map((items, index) => (
            <CustomLink href={pathname} passHref={href} className="flex flex-grow justify-center">
                  <Image
                    key={index}
                    pathname={`/tip-portal/${index + 1} + dollars`}
                    className="flex cursor-pointer hover:scale-15
                    transform transition-duration-300 ease-out animate-float"
                    src={`/images/dollar-${index + 1}.png`}
                    width={100}
                    height={100}
                    alt={`Dollar ${index + 1}`}
                    onMouseEnter={() => {
                      setActive(index);
                      setdescriptionOn(true);
                    }}
                    onMouseLeave={() => setdescriptionOn(true)}
                    
                  />
                </CustomLink>
              ))} */}

            <ul className="inline-flex flex-row cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallOne />
              </li>
              {/* <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallTwo />
              </li> */}
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallFive />
              </li>
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallTen />
              </li>
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallTwenty />
              </li>
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallFifty />
              </li>
              <li className="flex flex-grow justify-center cursor-pointer hover:scale-15 transform transition-duration-300 ease-out animate-float">
                <SmallOneHundred />
              </li>
            </ul>

            {/* description box */}
            <div
              className={`opacity-0 transition duration-150 ease-in-out absolute left-1/2 transform -translate-x-1/2 max-w-xs w-full p-0 bg-transparent dark:bg-gray-800 text-center shadow-2xl pointer-events-none ${
                descriptionOn && 'opacity-100'
              }`}
            >
              <div className="text-gray-600 dark:text-gray-400 mb-1">
                {items[active].description}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-100">
                {items[active].name}
              </div>
            </div>
          
        </section>
    )
}

export default Dollars
import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import CustomLink from './CustomLink';

function Dollars() {
  const router = useRouter();
  const [descriptionOn, setdescriptionOn] = useState(false);
  const [active, setActive] = useState(0);
  const [items] = useState([
    {
      stripeId: "prod_KkN85qymqSGyPN",
      id: "one",
      img: "/images/dollar-1.svg",
      name: "Leave a $1 tip?",
      price: "1",
      pathname: "https://buy.stripe.com/3cs7wy3NJdzeeeA5kq",
      tax: ""
    },
    {
      stripeId: "prod_KkNAK0W9XutFnv",
      id: "two",
      img: "/images/dollar-2.svg",
      name: "Leave a $2 tip?",
      price: "2",
      pathname: "https://buy.stripe.com/8wM3gi1FB52I0nKeUZ",
      tax: "txcd_10000000"
    },
    {
      stripeId: "prod_KkNAkMcEdikFRf",
      id: "five",
      img: "/images/dollar-5.svg",
      name: "Leave a $5 tip?",
      price: "5",
      pathname: "https://buy.stripe.com/cN26sufwr8eUc6s9AE",
      tax: "txcd_10000000"
    },
    {
      stripeId: "prod_KkNBJOGTn54X7Q",
      id: "ten",
      img: "/images/dollar-10.svg",
      name: "Leave a $10 tip?",
      price: "10",
      pathname: "https://buy.stripe.com/7sIeZ0esn7aQgmI28b",
      tax: "txcd_10000000"
    },
    
    {
      stripeId: "prod_KkNBX4NIvAhcyk",
      id: "twenty",
      img: "/images/dollar-20.svg",
      name: "Leave a $20.00 tip?",
      price: "20",
      pathname: "https://buy.stripe.com/9AQcQS5VR2UA3zWfZ5",
      tax: "txcd_10000000"
    },
    {
      stripeId: "prod_KkNCb42yuFruuW",
      id: "fifty",
      img: "/images/dollar-50.svg",
      name: "Leave a $50.00 tip?",
      price: "50",
      pathname: "https://buy.stripe.com/5kAcQS5VR9iY6M8dQS",
      tax: "txcd_10000000"
  },
  {
    stripeId: "prod_KkNDGAZfjnQzte",
    id: "one-hundred",
    img: "/images/dollar-100.svg",
    name: "Leave a $100.00 tip?",
    price: "100",
    pathname: "https://buy.stripe.com/dR66sugAveDi5I4001",
    tax: "txcd_10000000"
  }
  ])

    return (
        <section className="flex flex-container content-center">
          <CustomLink className="flex flex-grow justify-center" onClick={() => router.push('({`/tip-portal/leave-a-`)(${id})(`-dollar-tip`)')}>
              {/* <CustomLink> */}
                {items.map((item, index) => (
                  <Image
                    key={index}
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
                    onMouseLeave={() => setdescriptionOn(false)}
                  />
                ))}
            </CustomLink>

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
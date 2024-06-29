
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.09;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="z-10 relative  h-60 w-[19rem] md:h-68 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black  bg-white h-50 w-full md:h-50 md:w-96 lg:w-[24rem] rounded-3xl p-0 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="">
              {card.content}
            </div>
            {/* <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div> */}
          </motion.div>
        );
      })}
    </div>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <Image
        alt="ProfilePic"
        src="/assets/b.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-fill rounded-lg"
      ></Image>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <Image
        alt="ProfilePic"
        src="/assets/brandbird.png"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-contain rounded-lg"
      ></Image>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <Image
        alt="ProfilePic"
        src="/assets/b.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-fill rounded-lg"
      ></Image>
    ),
  },
];


const NmaCards = [
  {
    content: (
      <Image
        alt="Nmasinachi's Kitchen Pics"
        src="/assets/nma/nma4.png"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-contain bg-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Nmasinachi's Kitchen Pics"
        src="/assets/nma/nma1.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Nmasinachi's Kitchen Pics"
        src="/assets/nma/nma2.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Nmasinachi's Kitchen Pics"
        src="/assets/nma/nma3.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-fill rounded-lg"
      ></Image>
    ),
  },
];
const MilesCards = [
  {
    content: (
      <Image
        alt="MilesVilla Pics"
        src="/assets/miles/miles5.png"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-contain bg-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="MilesVilla Pics"
        src="/assets/miles/miles1.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="MilesVilla Pics"
        src="/assets/miles/miles2.jpeg"
        width={1000}
        height={100}
        className="w-[100%] h-52 md:h-58 rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="MilesVilla Pics"
        src="/assets/miles/miles3.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-fill rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="MilesVilla Pics"
        src="/assets/miles/miles4.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-fill rounded-lg"
      ></Image>
    ),
  },
];
const SercleCards = [
  {
    content: (
      <Image
        alt="Sercle Pics"
        src="/assets/sercle/serc5.png"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-contain bg-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Sercle Pics"
        src="/assets/sercle/serc1.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Sercle Pics"
        src="/assets/sercle/serc2.jpeg"
        width={1000}
        height={100}
        className="w-[100%] h-52 md:h-58 rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Sercle Pics"
        src="/assets/sercle/serc3.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-fill rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Sercle Pics"
        src="/assets/sercle/serc4.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-fill rounded-lg"
      ></Image>
    ),
  },
];
const CheckDDCards = [
  {
    content: (
      <Image
        alt="Check DDeck Pics"
        src="/assets/check/check4.png"
        width={1000}
        height={1000}
        className="w-[100%] h-auto object-contain bg-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Check DDeck Pics"
        src="/assets/check/check1.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-cover rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Check DDeck Pics"
        src="/assets/check/check2.jpeg"
        width={1000}
        height={100}
        className="w-[100%] h-52 md:h-58 rounded-lg"
      ></Image>
    ),
  },
  {
    content: (
      <Image
        alt="Check DDeck Pics"
        src="/assets/check/check3.jpeg"
        width={1000}
        height={1000}
        className="w-[100%] h-52 md:h-58 object-fill rounded-lg"
      ></Image>
    ),
  },
];


export { CardStack, CARDS, NmaCards, MilesCards, SercleCards, CheckDDCards };
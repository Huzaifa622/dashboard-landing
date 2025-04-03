"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  img:string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
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
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-80 md:w-3xl">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-gradient-to-r from-[#06314E] via-[#12497C] to-[#097399] h-60 w-60 md:h-80 md:w-3xl rounded-3xl p-4 shadow-xl border border-[#447BA0] dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex p-4 relative" >
              <img src="images/quotation.png" alt="" className="absolute top-4 left-4"  />
            <div className="font-normal flex flex-col gap-6 text-neutral-200 pr-16 mt-8">
              {card.content}
              <div  >{card.designation}</div>
              <Link to={""} className="group text-white mt-4 flex gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200">Read Case Study<span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"><ArrowRight size={14} /></span></Link>
            </div>
            
            <div><img src={card.img} className="w-2xl"/></div>
            </div>
            <div>
              {/* <p className=" font-medium text-white">
                {card.name}
              </p>
              <p className=" font-normal text-neutral-200">
                {card.designation}
              </p> */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Freelance Game Designer"
              company="Monster AR"
              companyLink="monsterar.net"
              time="Feb 2023 - Apr 2023"
              address="Surabaya, ID."
              work="Worked on a team responsible for
               design and develop an NFT Game base on Pandawa's Folklore,
               including balancing the hero and troops stats and make some improvement about game mechanic"
            />

            <Details
              position="Game Designer"
              company="Miraimimpi"
              companyLink="https://www.instagram.com/miraimimpi/"
              time="Aug 2021 - Now"
              address="Tangerang, ID."
              work="Worked on a team responsible for a mid core multiplayer
              mobile game, including create some character, balancing a game mechanic, create and adjust IAP and
              do some testing for bug hunting"
            />

            <Details
              position="Game Programmer Intern"
              company="Maulidan Games"
              companyLink="https://maulidangames.com/"
              time="Sep 2020 - Des 2020"
              address="Surabaya, ID."
              work="Worked on a team responsible for
              developing a science pyshic simulation game for childern, including implementing
              pyhsic mechanic game design such as Bouyancy Simulatiom,
              Gravity Simulation, Object Shattered Simulation and achieved Best Intern With Top Perfomance"
            />

        </ul>
      </div>
    </div>
  );
};

export default Experience;

/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/image 32.png";
import project2 from "../../public/images/projects/Screenshot 2023-04-17 at 5.21 1.png";
import project3 from "../../public/images/projects/flashcard-wp.png";
import project4 from "../../public/images/projects/3d Battleground.png";
import project5 from "../../public/images/projects/image 31.png";
import project6 from "../../public/images/projects/water.png";
import project7 from "../../public/images/projects/Screenshot 2023-06-23 at 5.08.44 PM.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Raka Arya Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Projects"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="KOCHENG: Battle of Boings"
                summary="KOCHENG : BATTLE OF BOINGS is a Multiplayer PVP game where you shoot to bounce your enemies into the arena around you. Together with Kocheng and other Boings, let's join the bouncing party in the Battle of Boings !"
                img={project1}
                link="https://play.google.com/store/apps/details?id=com.MiraiMimpi.BATTLEOFBOINGS"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                  type="Memorization Game with Leitnerr Sytem"
                  title="Flashcard Lumber"
                  img={project3}
                  link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                  github="https://gitlab.com/notslimboy/flashcard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Online Realtime Multiplayer Game"
                title="3D Battleground"
                img={project4}
                link="https://gitlab.com/notslimboy/3-d-battleground-multiplayer-online-shooting-game"
                github="https://gitlab.com/notslimboy/3-d-battleground-multiplayer-online-shooting-game"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="NFT Game"
                title="18 Days of War Mahabarats"
                summary="Destroying the opponent's tower or base by removing several available units by giving silver as a condition for being able to remove the unit. Players are required to have their strategy in winning the game either in the form of defense or attack. Players are also required to pay attention to each unit issued whether it has been effective or not in defeating the enemy"
                img={project2}
                link="https://18daysofwar.monsterar.net/"
                github="https://docs.google.com/document/d/1NNhO4F53uKHNQKQi8KYh1OMamG8_gcqpwpaA7MFj_Eo/edit?usp=sharing"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Pyshic Game"
                img={project5}
                title="3D Science School"
                link=""
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Pyshic Simulation Game"
                img={project6}
                title="Water Bouyancy"
                link="https://gitlab.com/notslimboy/water-bouyancy"
                github="https://gitlab.com/notslimboy/water-bouyancy"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                  type="Unreal game"
                  title="Zombie Land Survival"
                  summary="A shooting game that pits players against zombies is called Zombie Land Survival. The player must endure as long as they can."
                  img={project7}
                  link="https://notslimboy.itch.io/zombie"
                  github="https://notslimboy.itch.io/zombie"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

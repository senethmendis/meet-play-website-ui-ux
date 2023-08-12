import React from "react";
import styles, { layout } from "../styles";
import { iPhone1 } from "../assets";
import {motion as m} from 'framer-motion'

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} ${layout.section}  h-screen flex flex-col relative`}>
      <div
        className={`${styles.flexCenter} flex-col flex relative w-full h-full`}
      >
        <m.p initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}}
          className={`absolute z-40 top-0 py-4 ${styles.paragraph} text-center text-xl  sm:text-3xl`}
        >
          Can designing on your phone be better than <br /> on your desktop?
        </m.p>

        <m.img initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{delay:0.1}}
          src={iPhone1}
          alt="gradphone"
          className="  w-[350px] absolute z-30"
        />
        <m.h1 initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{delay:0.9}}
          className={`text-center text-[200px] md:text-[200px] lg:text-[300px] font-bold absolute z-20`}
        >
          Meet Play
        </m.h1>
      </div>
      <div className="absolute z-0 blue__gradient w-[30%] h-[20%] right-0" />
      <div className="absolute z-0 trq__gradient w-[30%] h-[20%] mx-auto" />
    </section>
  );
};

export default Hero;

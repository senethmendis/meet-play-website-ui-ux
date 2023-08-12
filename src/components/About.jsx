import React from "react";
import styles from "../styles";
import { aboutBg } from "../assets";
import {motion as m}from 'framer-motion'

const About = () => {
  return (
    <section
      className={`${styles.flexCenter} rounded-2xl relative flex flex-col bg-about-section`}
    >
      <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3}} className="absolute text-center">
        <h1 className={`${styles.headding}`}>Meet Play.</h1>
        <p className={`${styles.paragraph} text-3xl py-6`}>
          Design and build better products, in less time, with fewer barries -
          all <br /> on oyur mobile device.{" "}
        </p>
      </m.div>
      
      <div className="absolute w-[40%] h-[30%] z-50 trq__gradient  bottom-0"/>
      <img
        src={aboutBg}
        className="w-full rounded-3xl bg-cover object-cover h-[400px]  opacity-10 md:opa  border-2"
        
        alt=""
      />
    </section>
  );
};

export default About;

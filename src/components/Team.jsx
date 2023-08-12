import React from "react";
import styles from "../styles";
import { TeamBg } from "../assets";
import {motion as m} from 'framer-motion'

const Team = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}  flex flex-col`}>
      <m.h1
      initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{delay:0.1}}
        className={`${styles.maxPadding} ${styles.headding} font-normal ${styles.paddingY}`}
      >
        The Team.
      </m.h1>
      <div className={`${styles.paddingY}`}>
        <m.div
        initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{delay:0.2}}
          className={`${styles.paragraph} gap-6 flex flex-row ${styles.maxPadding}`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            deserunt nihil voluptate ipsam quaerat, quis, mollitia facere quasi
            officia explicabo iusto debitis dolorem quas aliquid magnam vel in.
            Pariatur, autem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            deserunt nihil voluptate ipsam quaerat, quis, mollitia facere quasi
            officia explicabo iusto debitis dolorem quas aliquid magnam vel in.
            Pariatur, autem?
          </p>
        </m.div>
        <div className="w-full h-[550px] mt-10 ">
          <m.img
          initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}}
            src={TeamBg}
            alt=""
            className="to__back_white object-cover w-full h-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from "react";
import styles from "../styles";
import { iPhone2 } from "../assets";
import {motion as m} from 'framer-motion'

const Products = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} ${styles.maxPadding}`}
    >
      <m.h1 initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{delay:0.1}} className={`${styles.headding} ${styles.paddingY} font-normal`}>
        Turn your ideas into <br className="sm:block hidden" /> working products
        - fast.
      </m.h1>
      <m.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{delay:0.2}}
        className={`${styles.paragraph} text-justify w-full h-full gap-4 flex flex-row`}
      >
        <div className={`flex-1 flex-col flex gap-4`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis laboriosam nobis suscipit voluptatem recusandae,
            dolorem quae magnam! Doloremque earum
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis laboriosam nobis suscipit voluptatem recusandae,
          </p>
        </div>
        <div className={`flex-1`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis{" "}
            <span className="bold capitalize">laboriosam nobis</span> suscipit
            voluptatem recusandae,
          </p>
        </div>
      </m.div>

      <div className={`${styles.flexCenter} relative mt-10`}>
        <div className=" justify-between w-full flex flex-wrap gap-3 grid-flow-col md:grid-cols-2 lg:grid-flow-col-2 ">
          <m.img initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{delay:0.4}} src={iPhone2} alt="" className="max-w-[350px] mx-auto " />
          <m.img initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{delay:0.3}} src={iPhone2} alt="" className="max-w-[350px] mx-auto " />
          <m.img initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{delay:0.2}} src={iPhone2} alt="" className="max-w-[350px] mx-auto" />
          
        </div>

        <div className="-z-50 absolute w-[40%] h-[30%] blue__gradient " />
      </div>
    </section>
  );
};

export default Products;

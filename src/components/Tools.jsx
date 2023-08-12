import styles, { layout } from "../styles";
import { iPhone2 } from "../assets";
import { motion as m } from "framer-motion";

const Tools = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} ${styles.maxPadding}`}
    >
      <m.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className={`${styles.headding} ${styles.paddingY} font-normal`}
      >
        Not another tool - an <br className="sm:block hidden" /> entirely new
        approach.
      </m.h1>
      <m.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className={`${styles.paragraph} text-justify w-full h-full gap-4 flex flex-row`}
      >
        <div className={`flex-1 flex-col flex gap-4`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis laboriosam nobis suscipit voluptatem recusandae,
            assumenda dicta magni, dolorem quae magnam! Doloremque earum
            expedita inventore nihil modi voluptatibus sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis laboriosam nobis suscipit voluptatem recusandae,
            assumenda dicta magni, dolorem quae magnam! Doloremque earum
            expedita inventore nihil modi voluptatibus sapiente.
          </p>
        </div>
        <div className={`flex-1`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            repellendus debitis laboriosam nobis suscipit voluptatem recusandae,
            assumenda dicta magni, dolorem quae magnam! Doloremque earum
            expedita inventore nihil modi voluptatibus sapiente.
          </p>
          <a href="" className="flex font-bold gap-3 items-center text-acents">
            Read our story on Medium{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </span>{" "}
          </a>
        </div>
      </m.div>

      <div className={`${styles.flexCenter} relative`}>
        <m.img
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.9 }}
          src={iPhone2}
          alt=""
          className="w-[350px] mt-10"
        />
        <div className="-z-50 absolute w-[40%] h-[30%] blue__gradient " />
      </div>
    </section>
  );
};

export default Tools;

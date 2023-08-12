import React, { useEffect, useState } from "react";
import styles, { layout } from "../styles";
import Select from "react-select";
import {motion as m} from 'framer-motion'

const JoinForm = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <section
      className={`flex flex-col gap-6 lg:flex-row ${styles.paddingY} ${styles.maxPadding} ${styles.flexCenter} `}
    >
      <m.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{delay:0.1}} className={`flex-1/2 ${styles.paddingX}`}>
        <h1  className={`${styles.headding} font-normal`}>
          Join <br className="sm:block hidden" />
          Privet <br className="sm:block hidden" /> Beta.
        </h1>

        <p className="text-justify mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus laudantium aliquid vitae,{" "}
          <span className="text-acents">Facebook</span> incidunt iste dolorum.
        </p>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus laudantium <span className="text-acents">Twitter</span>
        </p>
      </m.div>
      <m.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} transition={{delay:0.5}} className={`flex-1/2 flex flex-col`}>
        
          <form action="" className="w-full">
            <input className="select" type="text" placeholder="Name" />
            <input className="select" type="email" placeholder="E-mail" />
            <Select
              className="select"
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            />
            <button className="w-full bg-acents p-4 rounded-md mt-4">
              Submit
            </button>
          </form>
        
      </m.div>
    </section>
  );
};

export default JoinForm;

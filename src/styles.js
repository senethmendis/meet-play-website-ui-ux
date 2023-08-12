const styles = {
  headding:
    "font-Lato font-bold xs:text-[48px] text-[72px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-lato font-thin text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
  maxPadding:" md:px-[10%] lg:px-[20%]  px-6"
};

export const layout={
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
} 
export default styles;
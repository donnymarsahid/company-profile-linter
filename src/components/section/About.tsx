import { styles } from "@/css/styles";
import React from "react";
import AboutImage from "@/assets/about.png";
import listAbout from "@/assets/list-about.svg";

const About = () => {
  return (
    <section className="bg-white">
      <div className={`${styles["main-container"]}`}>
        <div className="py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-x-[150px]">
          <img src={AboutImage} alt="About" className="self-center" />
          <div>
            <h2 className="text-lg font-semibold text-purple-brand">ABOUT US</h2>
            <h1 className="font-extrabold md:text-[24px] text-2xll sm:leading-[60px]  text-gray-brand mt-[5px]">Mengenal Linter Teknologi</h1>
            <p className="text-gray-brand sm:text-[16px] text-sm font-medium mt-5">
              Linter adalah perusahaan konsultan IT yang didedikasikan untuk memberikan solusi teknologi yang berkualitas tinggi bagi klien kami. Kami percaya bahwa setiap bisnis
              unik, oleh karena itu, kami berkomitmen untuk menghadirkan solusi yang disesuaikan dengan kebutuhan unik setiap klien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

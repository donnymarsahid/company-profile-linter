import React from "react";
import Marquee from "react-fast-marquee";

import { styles } from "@/css/styles";

import Github from "@/assets/client/github.svg";
import Amazon from "@/assets/client/amazon.svg";
import Linkedin from "@/assets/client/linkedin.svg";
import Medium from "@/assets/client/medium.svg";
import Paypal from "@/assets/client/paypal.svg";
import Redis from "@/assets/client/redis.svg";
import Microsoft from "@/assets/client/microsoft.svg";
import Reddit from "@/assets/client/reddit.svg";

const Client = () => {
  return (
    <section className="bg-[#F8F8FF]">
      <div className={`${styles["main-container"]}`}>
        <div className="py-[80px] w-full text-gray-brand">
          <div className="text-center">
            <h1 className="font-extrabold text-[32px] ">Perusahaan Rekanan Kami</h1>
            <h2 className="text-black text-[18px] font-medium">Sudah sekitar 50 Client kami yang sudah bergabung.</h2>
          </div>
          <div className="mt-[80px]">
            <Marquee gradientColor={[248, 248, 255]}>
              <img src={Github} className="ml-7 lg:grayscale hover:grayscale-0" alt="github" />
              <img src={Microsoft} className="ml-7 lg:grayscale hover:grayscale-0" alt="microsoft" />
              <img src={Redis} className="ml-7 lg:grayscale hover:grayscale-0" alt="redis" />
              <img src={Amazon} className="ml-7 lg:grayscale hover:grayscale-0" alt="Amazon" />
              <img src={Github} className="ml-7 lg:grayscale hover:grayscale-0" alt="github" />
              <img src={Microsoft} className="ml-7 lg:grayscale hover:grayscale-0" alt="microsoft" />
              <img src={Redis} className="ml-7 lg:grayscale hover:grayscale-0" alt="redis" />
              <img src={Amazon} className="ml-7 lg:grayscale hover:grayscale-0" alt="Amazon" />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
